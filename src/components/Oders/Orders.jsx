import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { json, useLoaderData } from 'react-router-dom';
import CartItems from '../cartItems/CartItems';
import { getShoppingCart } from '../../utilities/fakedb';

const Orders = () => {
    const cart = useLoaderData()
    const [currentCart, setCart] = useState(cart)
    const updatedCart = (id) => {
        // console.log(currentCart)
        const remainingCart = currentCart.filter(prodect => prodect.id !== id)
        setCart(remainingCart)

        const currentShopingCart = getShoppingCart()
        console.log(currentShopingCart)
        const currentCartDb = {...currentShopingCart}
        delete currentCartDb[id]

        localStorage.setItem('shopping-cart', JSON.stringify(currentCartDb))
    }
    // console.log(cart)
    return (
        <div className='shop-container'>
            <div className='product-container ml-20 flex flex-col gap-6 items-center'>
                <h1 className='text-xl mt-6'>orders {currentCart.length}</h1>
                {
                    currentCart.map(singlecart=> <CartItems key={singlecart.id} cart={singlecart} updatedCart={updatedCart}></CartItems>)
                }
            </div>
            <div>
                <Cart cart={currentCart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;