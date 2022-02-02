import React, {useContext} from 'react';
import MainContext from "../context/MainContext";

const ProductList = ({product}) => {

    const {showSingleProd, addToCart, removeFromCart}=useContext(MainContext);
    console.log('produktu sarasas', product)

    return (
        <div className={'product-list'}>
            <img src={product.image} alt={product.title} onClick={()=>showSingleProd(product)}/>
            <h3>{product.title}</h3>
            <p><b>{product.price}</b></p>
            <div className={'flex'}>
                <button onClick={()=>{addToCart(product)}}>+</button>
                <div><b>{product.ammount}</b></div>
                <button onClick={()=>{removeFromCart(product)}}>-</button>
            </div>

        </div>
    );

};

export default ProductList;