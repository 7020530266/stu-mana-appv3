import React from "react";
import './Welcome.css';
import Capture4 from './assets/imgs/Capture4.PNG';

export default function Welcome(){

    return(
        <div className ="Entry-Caption">
            <p>Hi, Welcome to GUVI</p>
            <img
              className="Capture4"
              src={Capture4}
              alt="..."
            />
        </div>

    )
}