import React, {useContext} from 'react';
import ProdCard from "../components/ProdCard";
import MainContext from "../context/MainContext";
import ProductList from "../components/ProductList";

const ShoppingCart = () => {

    const {cart, setCart}=useContext(MainContext);

    return (
        <div className={'flex-col'}>
            <h2>Shopping cart page.Product in a list below</h2>
            <div className={'flex-col stretch'}>
                {cart.map((p, i)=><ProductList product={p} className={'product-card'} key={i}/>)}
            </div>

        </div>
    );
};

export default ShoppingCart;