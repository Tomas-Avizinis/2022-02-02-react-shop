import React from 'react';


const ProdCard = ({product}) => {
    console.log('vienas produktas', product)
    return (
        <div className={'product-card'}>
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><b>{product.price}</b></p>
            <button>Add to cart</button>
        </div>
    );
};

export default ProdCard;