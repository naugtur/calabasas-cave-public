import React, {createContext, useState, useEffect} from "react";
import AppContract from "../contract/CalabasasCaveCreatures";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import Web3Utils from "web3-utils";
import detectEthereumProvider from "@metamask/detect-provider";


const injected = new InjectedConnector({
    supportedChainIds: [1,3,4,5,42]
})

// Contract Address on NET
// Test Contract URL https://rinkeby.etherscan.io/address/0x5bf028f4d045667a94b8c16e315249d2faca008a#code
// Mainnet URL 
const CONTRACT_ADDRESS = '0x5bF028F4d045667a94b8C16e315249D2fACa008A';
const CORRECT_NET_ID = 4;


export const DAppContext = createContext(null);

export const DAppProvider = ({ children }) => {
    const [instance, setInstance] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [transactionHash, setTransactionHash] = useState('');
    const [loading, setLoading] = useState(false);
    const [networkId, setNetworkId] = useState(4);
    const [contractDetails, setContractDetails] = useState(null);

    const web3Context = useWeb3React();

    const {
        connector,
        account,
        activate,
        deactivate,
        active,
    } = web3Context;
    
    const currentConnector = injected;
    const connected = currentConnector === connector;

    const initialWebWalletSync = async () => {
        const provider = await detectEthereumProvider();

        const web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();

        const networkID = await web3.eth.net.getId();
        
        const instance = new web3.eth.Contract(
            AppContract.abi,
            CONTRACT_ADDRESS
        );

        setAccounts(accounts);
        setNetworkId(Number(networkID));
        setInstance((instance))
    }

    const connectWallet = async () => {
        setLoading(true)
        try {
            if(networkId !== CORRECT_NET_ID) {
                throw new Error(`Please change to Rinkeby Network`);
            }
            await activate(injected);
            setLoading(false)
        } catch (error) {
            console.log(error, "Error");
        }
    };

    const weiToEther = (wei) => {
        return Web3Utils.fromWei(wei);
    }

    const mint = async (count) => {
        try {
            setLoading(true);
            if (!instance) throw new Error(`No instance`);
            if (!accounts.length)
                throw new Error(`No account selected. Try reauthenticating`);
            if (!count) throw new Error(`No token count provided.`);
            if(networkId !== CORRECT_NET_ID) alert('Please change to MainNet');

            const {
                isActive,
                isAllowListActive,
                mint,
                preSaleMint,
            } = instance.methods;

            const isPublicSaleActive = await isActive()?.call();
            const isPresaleActivated = await isAllowListActive()?.call();

            if (isPublicSaleActive && isPresaleActivated)
                throw new Error(`Error in Contract. Method is activated wrongly`);

            if (!isPublicSaleActive && !isPresaleActivated )
                throw new Error(`Sales has not start yet`);

            if (isPresaleActivated) {
                
                return await preSaleMint(count)
                    .send({
                        from: account,
                        value: Web3Utils.toWei(
                            (Number(contractDetails.price) * count).toString(),
                            "ether"
                        ),
                    })
                    .once("error", (err) => {
                        alert(err.stack);
                    })
                    .then((success) => {
                        if (success?.status) {
                            setTransactionHash(success.transactionHash)
                            alert("Congratulations. Your NFT's successfully claimed");
                            setLoading(false);
                        }
                    });

            }

            return await mint(account, count)
                .send({
                    from: account,
                    value: Web3Utils.toWei(
                        (Number(contractDetails.price) * count).toString(),
                        "ether"
                    ),
                })
                .once("error", (err) => {
                    alert(err.stack);
                })
                .then((success) => {
                    if (success?.status) {
                        setTransactionHash(success.transactionHash)
                        alert("Congratulations. Your NFT's successfully claimed");
                        setLoading(false);
                    }
                });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const getContractDetails = async () => {
        if(!instance) return null;
        let details = {};

        const {
            isAllowListActive,
            isActive,
            mintPrice,
            name,
            maximumAllowedTokensPerPurchase,
            maximumMintSupply,
            totalSupply
        } = instance.methods;
        
        const isPresaleActivated = await isAllowListActive()?.call();
        const isPublicSaleActive = await isActive()?.call();
        const collectionName = await name()?.call();
        const maxAllowedTokensPerPurchase = await maximumAllowedTokensPerPurchase()?.call();
        const maxMintSupply = await maximumMintSupply()?.call();
        const totalSupplyNFT = await totalSupply()?.call();
        const publicETHPrice = weiToEther(`${await mintPrice()?.call()}`);
        details.price = publicETHPrice

        details = {
            ...details,
            isPresaleActive: isPresaleActivated,
            isPublicSaleActive,
            collectionName,
            maxAllowedTokensPerPurchase,
            maxMintSupply,
            totalSupplyNFT
        }

        setContractDetails(details)

        if(!isPresaleActivated && !isPublicSaleActive){
            setContractDetails({
                ...details,
                saleIsClosed: true,
            })

        }



    }

    const resetTransactionHash = () => {
        setTransactionHash("");
    }

    useEffect(() => {
        initialWebWalletSync()
    }, [active]);

    useEffect(() => {
        getContractDetails()
    }, [instance]);


    useEffect(() => {
        return () => {
            deactivate()
        };
    }, [deactivate]);

    

    return(
        <DAppContext.Provider
            value={{
                connectWallet,
                mint,
                active,
                loading,
                transactionHash,
                connector,
                resetTransactionHash,
                connected,
                contractDetails,
                account: accounts[0]
            }}
        >
            {children}
        </DAppContext.Provider>
    )

}