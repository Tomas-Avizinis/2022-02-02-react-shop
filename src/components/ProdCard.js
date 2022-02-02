import React, {useContext} from 'react';
import MainContext from "../context/MainContext";


const ProdCard = ({product}) => {

    const {showSingleProd, addToCart}=useContext(MainContext);

    return (
        <div className={'product-card'}>
            <img src={product.image} alt={product.title} onClick={()=>showSingleProd(product)}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><b>{product.price}</b></p>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
    );
};

export default ProdCard;