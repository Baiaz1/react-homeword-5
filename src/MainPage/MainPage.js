import {News} from "../News/News";
import React,{useState} from "react";
import classes from "./MainPage.module.css";

function MainPage (){


const [value, setValue] = useState("")


    function changeValue(e){
    setValue(<News/>)
    }

    return(
        <div>
            {value}
            <button onClick={changeValue}>
             News
            </button>


        </div>
    )



}

export default MainPage;