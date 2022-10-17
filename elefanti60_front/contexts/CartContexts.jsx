import React from 'react'
export const CartContexts = React.createContext(null);
  
export const CartProvider = ({ children }) => {

    try{
        var user = window.localStorage.getItem('id');
    }  catch(ex){
        console.log(ex)
    }
    return (
        <CartContexts.Provider value={user} >
            {children}
        </CartContexts.Provider>
    )
}