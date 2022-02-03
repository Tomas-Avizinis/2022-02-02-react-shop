import React, {useContext} from 'react';
import MainContext from "../context/MainContext";

const ProductList = ({product}) => {

    const {showSingleProd, addToCart, removeFromCart}=useContext(MainContext);
    console.log('produktu sarasas', product)

    return (
        <div className={'product-list-item'}>
            <img src={product.image} alt={product.title} onClick={()=>showSingleProd(product)}/>
            <h3>{product.title}</h3>
            <p><b>{product.price}</b></p>
            <div className={'flex'}>
                <button className={'add-remove-btn'} onClick={()=>{addToCart(product)}}>+</button>
                <div><b>{product.ammount}</b></div>
                <button className={'add-remove-btn'} onClick={()=>{removeFromCart(product)}}>-</button>
            </div>

        </div>
    );

};

export default ProductList;