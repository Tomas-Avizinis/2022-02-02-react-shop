import React, {useContext, useRef} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {

    const {products, setProducts}=useContext(MainContext);
    const nav=useNavigate();

    const prodTitle=useRef();
    const prodText=useRef();
    const prodImage=useRef();
    const prodPrice=useRef();


    const createProduct=()=>{

        const newProduct = {
            title:prodTitle.current.value,
            description: prodText.current.value,
            image:prodImage.current.value,
            price:prodPrice.current.value
        };

        if (Object.values(newProduct).every(Boolean)) {
            setProducts([...products, newProduct]);
            nav('/');
        }
    }


    return (
        <div className={'create-products'}>
            <h2>Create new product in shop</h2>
            <div className={'create-product-box flex-col'}>
                <input type="text" ref={prodTitle} placeholder={'Title'}/>
                <input type="text" ref={prodText} placeholder={'Description'}/>
                <input type="text" ref={prodImage} placeholder={'image'}/>
                <input type="text" ref={prodPrice} placeholder={'Price'}/>
                <button onClick={createProduct}>Create product</button>
            </div>
        </div>
    );
};

export default CreateProduct;