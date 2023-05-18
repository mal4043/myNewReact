import React, { useState } from "react";
import "./header.css"

function Header() {

    return (
        <div className="header">
            <h1>Header!!!</h1>
            <ul>
                <a href="#"><li>red</li> </a>
                <a href="#"><li>yellow</li> </a>
                <a href="#"><li>green</li> </a>
            </ul>
            <p>to check</p>
      <div> <button> click me</button></div>
    
        </div>
    )
}
export default Header
