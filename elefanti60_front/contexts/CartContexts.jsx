import React from 'react'
import { useState } from 'react';
export const CartContexts = React.createContext(null);
  
export const CartProvider = ({ children }) => {

    var log = console.log;
    if (typeof window === "undefined") {console.log("window undefined")}
    else{log("defined")}
    try{
        var user = window.localStorage.getItem('id');
        console.log(user, "user");
    }  catch(ex){
        log(ex)
    }
    return (
        <CartContexts.Provider value={user} >
            {children}
        </CartContexts.Provider>
    )
}