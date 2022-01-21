import React from 'react';
import ReactDOM from 'react-dom';
import { DAppProvider } from "./context";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import App from './App';

const libraryProvider = (provider) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={libraryProvider}>
      <DAppProvider>
          <App />
      </DAppProvider>
  </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

