import React, {useContext} from 'react';
import MainContext from "../context/MainContext";

const TopHeader = () => {

    const {cart}=useContext(MainContext);

    return (
        <div className={'top-header'}>
            <button>All products</button>
            <button>Create product</button>
            <button>Shopping Cart</button>
            <p>{cart.length}</p>
        </div>
    );
};

export default TopHeader;