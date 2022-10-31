import { useState } from 'react';
import "./DislikeButton.css"


const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive2");

    function handleClick2(){
        if(buttonClass==="inactive2"){
            setButtonClass("active2");
        } else{
            setButtonClass("inactive2")
        }
    }
        return (
            <div>
                <button className={buttonClass} onClick={handleClick2}>{props.message}</button>
            </div>
        )
}

export default DislikeButton