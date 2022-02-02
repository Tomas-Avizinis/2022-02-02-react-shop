import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import ProdCard from "../components/ProdCard";

const Products = () => {

    const {products}=useContext(MainContext);


    return (
        <div className={'all-products flex-col'}>
            <h2>All items You can buy here</h2>
            <div className={'flex stretch'}>
                {products.map((p, i)=><ProdCard product={p} className={'product-card'} key={i}/>)}
            </div>
        </div>
    );
};

export default Products;