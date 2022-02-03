import React, {useContext} from 'react';
import MainContext from "../context/MainContext";


const ProdCard = ({product}) => {

    const {showSingleProd, addToCart}=useContext(MainContext);

    return (
        <div className={'product-card'}>
            <div className={'flex-col'}>
                <img src={product.image} alt={product.title} onClick={()=>showSingleProd(product)}/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className={'flex-col'}>
                <p>Price:<b> {product.price}</b></p>
                <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>

        </div>
    );
};

export default ProdCard;