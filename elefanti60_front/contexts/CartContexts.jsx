import React from 'react'
import { useState } from 'react';
export const CartContexts = React.createContext(null);



export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState();
    return (
        <CartContexts.Provider value={{products, setProducts}}>
            {children}
        </CartContexts.Provider>
    )
}