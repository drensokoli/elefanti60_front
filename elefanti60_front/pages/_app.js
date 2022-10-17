import '../styles/globals.css'
import '../styles/slickcss.css'
import {CartContexts, CartProvider} from '../contexts/CartContexts'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />     
    </CartProvider>
    
  
  );
}

export default MyApp
