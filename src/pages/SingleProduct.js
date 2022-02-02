import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import MainContext from "../context/MainContext";
import ProdCard from "../components/ProdCard";

const SingleProduct = () => {

    const {currentProduct}=useContext(MainContext);
    const {params}=useParams();
    console.log(params)

    return (
        <div className={'single-product flex-col'}>
            <h2>One single product in this page: {currentProduct.title}</h2>
            <ProdCard product={currentProduct} className={'product-card'}/>
        </div>
    );
};

export default SingleProduct;