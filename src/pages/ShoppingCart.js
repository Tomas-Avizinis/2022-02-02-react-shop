import React, {useContext} from 'react';
import ProdCard from "../components/ProdCard";
import MainContext from "../context/MainContext";
import ProductList from "../components/ProductList";

const ShoppingCart = () => {

    const {cart, totalPrice}=useContext(MainContext);

    return (
        <div className={'shopping-cart'}>
            <h2>CART. My selected products</h2>
            <div className={'product-list'}>
                {cart.map((p, i)=><ProductList product={p} className={'product-card'} key={i}/>)}
                <div className={'price-line'}> Total price:  <b>  {totalPrice}</b></div>
            </div>


        </div>
    );
};

export default ShoppingCart;