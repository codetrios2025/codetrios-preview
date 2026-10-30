import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight  } from "lucide-react";

// import ContactUs from '../HomeRoute/Contact';

const ActionButton = ()=>{
    const [isOPen, setIsopen] = useState(false);
    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
        <div className="actionBtn">
            <button type='button'onClick={formOpenHandler} className="ctBtn ct-primery-btn">Get a Free Consultation</button>
            <Link to="/portfolio" title="View CodeTrios portfolio" className="ctBtn ct-secoundary-btn" >View Our Portfolio <ArrowUpRight className="icon" /></Link>
        </div>
        {/* {isOPen && 
            <div className={Style.formPop}>
                <div className={'popStyle ' + Style.formElem}>
                    <button type='button' onClick={formCloseHandler} className={Style.closeBtn}><IoCloseSharp /></button>
                    <ContactUs />
                </div>
            </div>
        } */}
        </>
    )
}

export default ActionButton;