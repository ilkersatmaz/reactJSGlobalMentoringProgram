import {React, useState} from "react";
import "./Counter.css";

function Counter(props){
    let {startBy, countBy=1} = props;
    
    let [counter, setCounter]=useState(Number.isFinite(startBy) ? startBy : 0);
    return (
        <>
            <p className="counter-title">Current Value: <b>{counter}</b></p>
            <button className="counter-btn down-btn" onClick={()=> {setCounter(counter-countBy)}}>Down</button>
            <button className="counter-btn up-btn" onClick={()=> {setCounter(counter+countBy)}}>Up</button>
        </>        
    );
}

export default Counter;