import '../styles/globals.css'
import '../styles/slickcss.css'
import {StoreProvider} from '../utils/Store';
import {CartContexts, CartProvider} from '../contexts/CartContexts'
import { UserContext } from '../contexts/UserContext';
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <StoreProvider>
        <UserContextProvider>
        <Component {...pageProps} />
        </UserContextProvider>
      </StoreProvider>
      
    </CartProvider>
    
  
  );
}

export default MyApp
