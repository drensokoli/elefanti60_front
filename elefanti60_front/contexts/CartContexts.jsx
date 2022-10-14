import React from 'react'
import { useState } from 'react';
export const CartContexts = React.createContext(null);

function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }
  
export const CartProvider = ({ children }) => {

   // const [product, setProducts] = useState();
    var log = console.log;
    if (typeof window === "undefined") {console.log("window undefined")}
    else{log("defined")}
    try{
        var user = window.localStorage.getItem('id');
        console.log(user, "user");
    }  catch(ex){
        log(ex)
    }
     // localStorage.setItem("id", user);
    return (
        <CartContexts.Provider value={user} >
            {children}
        </CartContexts.Provider>
    )
}