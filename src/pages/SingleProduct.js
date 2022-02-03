import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import MainContext from "../context/MainContext";
import SingleProdCard from "../components/SingleProdCard";

const SingleProduct = () => {

    const {currentProduct}=useContext(MainContext);
    const {params}=useParams();
    console.log(params)

    return (
        <div className={'main-container'}>
            <SingleProdCard product={currentProduct} />
        </div>
    );
};

export default SingleProduct;