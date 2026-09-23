import { createContext, useContext, useState} from "react";


const CartpageContext = createContext();

export function Cartpage({ children }) {
    const [cartItem, setCartitem] = useState([]);

    function AddtoCart(item) {
    setCartitems([...cartitems, {name: item.name, price: item.price }]);
    }


    return(
        <CartpageContext.Provider value = {{cartItem, AddtoCart}}>
        { children }
        </CartpageContext.Provider>
    );

}

export function useCart() {
    return useContext(CartpageContext);
}

