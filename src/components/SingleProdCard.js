import React, {useContext} from 'react';
import MainContext from "../context/MainContext";

const SingleProdCard = ({product}) => {
    const { addToCart}=useContext(MainContext);

    return (
        <div className={'single-product-card'}>
            <img src={product.image} alt={product.title} />
            <div className={'flex-col'}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><b>{product.price}</b></p>
                <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>

        </div>
    );
};

export default SingleProdCard;