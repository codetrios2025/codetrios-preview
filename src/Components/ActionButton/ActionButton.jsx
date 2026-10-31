import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight  } from "lucide-react";
import ContactUs from '../HomeRoute_V1/Contact';

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
            <button type='button' onClick={formOpenHandler} className="ctBtn ct-primery-btn">Get a Free Consultation</button>
            <Link to="/portfolio" title="View CodeTrios portfolio" className="ctBtn ct-secoundary-btn" >View Our Portfolio <ArrowUpRight className="icon" /></Link>
        </div>
        {isOPen && 
            <div className="formPop">
                <div className="formElem">
                    <button type='button' onClick={formCloseHandler} className="closeBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path vector-effect="non-scaling-stroke" d="M18 6 6 18"/><path vector-effect="non-scaling-stroke" d="m6 6 12 12"/></svg>
                    </button>
                    <ContactUs />
                </div>
            </div>
        }
        </>
    )
}

export default ActionButton;