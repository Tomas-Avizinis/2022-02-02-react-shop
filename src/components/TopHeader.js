import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";

const TopHeader = () => {

    const {cart}=useContext(MainContext);
    const nav=useNavigate();

    return (
        <div className={'top-header'}>
            <button onClick={()=>nav('/')}>All products</button>
            <button onClick={()=>nav('/createproduct')}>Create product</button>
            <button onClick={()=>nav('/shoppingcart')}>Shopping Cart</button>
            <p>{cart.length}</p>
        </div>
    );
};

export default TopHeader;