import '../styles/globals.css'
import '../styles/slickcss.css'
import {StoreProvider} from '../utils/Store';
import {CartContexts, CartProvider} from '../contexts/CartContexts'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <StoreProvider>
      <Component {...pageProps} />
      </StoreProvider>
      
    </CartProvider>
    
  
  );
}

export default MyApp
