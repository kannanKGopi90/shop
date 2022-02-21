import React from "react";
import {Redirect,Route} from "react-router-dom"

export let Privateroute =({component: Component,...rest}) =>{
return(
    <Route {...rest} />
)
}