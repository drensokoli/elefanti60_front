import { createContext, useReducer } from "react";


export const Store = createContext();


// Posht kemi kriju nje gjendje fillestare te Cart qe eshte nje list e thate

  const initialState = {
    cart: { cartItems: [] },
  };

//   Posht kemi kriju nje funksion reducer qe kthen nje gjendje te re, 
//   duke performu nje aksion ne gjendjen fillestare


  function reducer( state, action) {
    switch (action.type) {
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item.slug === newItem.slug
            );
            const cartItems = existItem? state.cart.cartItems.map((item) => 
            item.name === existItem.name ? newItem : item
            )
            : [...state.cart.cartItems, newItem];
            return { ...state, cart: {...state.cart, cartItems }}
            
        }
        case 'CART_REMOVE_ITEM': {
          const cartItems = state.cart.cartItems.filter(
            (item) => item.slug !== action.payload.slug
          );
          return { ...state, cart: {...state.cart, cartItems}};
        }
        default:
            return state;
    }
  }

// case 'CART_ADD_ITEM' shton produktin e ri ne cart dhe nese produkti 
// ekziston ne cartItem e perditesojme quantity duke perdor nje condition

  export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>;

  }
  