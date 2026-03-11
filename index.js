import React from "react";
import ReactDOM from "react-dom/client";

function Main() {

    function changeColor(color){
        document.body.style.backgroundColor = color;
    }

    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="container" >
            <button onClick={() => changeColor("red")}>Red</button>
            <button onClick={() => changeColor("yellow")}>Yellow</button>
            <button onClick={() => changeColor("pink")}>Pink</button>
            <button onClick={()=>changeColor("blue")}>Blue</button>
            <button onClick={()=>changeColor("orange")}>Orange</button>
            </div>
        </>
    );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

root.render(<Main />);