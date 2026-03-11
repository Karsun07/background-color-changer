import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

function Main() {

        const [color,setColor]=useState("black");
        //useEffect(callbackFuntion,dependency)
        console.log("first");
        useEffect(()=>{
            console.log("useEffect executed");
            document.body.style.backgroundColor = color;
        },[color])
        console.log("second");

    return (
        <>
            <div className="container" >
            <h1 style={{color:"#A0D585"}}>Background Color Changer</h1>
            <button onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("yellow") } style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
            </div>
        </>
    );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

root.render(<Main />);