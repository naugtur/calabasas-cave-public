import React from 'react'
import classes from "./FaqItem.module.css"
 
const FaqItem = ({active, setActive, buttonId, title, text}) =>{

    function toggle(id) {

        if(active===buttonId){
            return setActive(null)
        }
        setActive(id)

    }

    return (

        <div className={`accordion-item  ${classes.faq_item} ${active===buttonId ? classes.active_item : 'deactive'}`}>
            <h3 className="accordion-header" id={'heading'+buttonId}>
                <button onClick={()=> toggle(buttonId)} className={`accordion-button accordion-toggle collapsed align-items-baseline ${classes.faq_btn}
                                               `}
                        type="button"
                        data-bs-toggle="collapse" data-bs-target={'#'+buttonId}
                        aria-expanded="true" aria-controls="collapseOne">
                    {title}
                </button>
            </h3>
            <div id={buttonId} className={`accordion-collapse collapse ${classes.faq_text}`}
                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${classes.faq_body}`}>
                    {text}
                </div>
            </div>
        </div>
    )
};

export default FaqItem;
