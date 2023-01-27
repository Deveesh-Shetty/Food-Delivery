import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    cart: [],
    setCart: () => {},
};

const CartContext = createContext(initialState);

export const CartContextProvider = props => {
    const [cart, setCart] = useState([]);

    const cartChangeHandler = order => {
        const existingOrderIndex = cart.findIndex(item => item.productId === order.productId);

        // add new order
        if (existingOrderIndex < 0) {
            setCart(prevState => [order, ...prevState]);
        } else {
            // update order
            setCart(prevState => {
                return prevState.map(cartItem => {
                    if (cartItem.productId === order.productId) {
                        return order;
                    }

                    return cartItem;
                });
            });
        }
    };

    console.log(cart);

    const contextValue = {
        cart,
        onCartUpdate: cartChangeHandler,
    };

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
