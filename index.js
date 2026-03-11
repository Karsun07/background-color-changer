import React from "react";
import ReactDOM from "react-dom/client";

function Main() {

    function changeColor(color){
        document.body.style.backgroundColor = color;
    }

    return (
        <>
            
            <div className="container" >
            <h1 style={{color:"#A0D585"}}>Background Color Changer</h1>
            <button onClick={() => changeColor("red")} style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => changeColor("yellow") } style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => changeColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>changeColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>changeColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
            </div>
        </>
    );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

root.render(<Main />);