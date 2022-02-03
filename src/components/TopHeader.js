import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";

const TopHeader = () => {

    const {cart}=useContext(MainContext);
    const nav=useNavigate();

    console.log('kas gaunasi skaiciuojant pirkinius', cart.reduce((sum, a) => sum + a.ammount, 0))

    return (
        <div className={'top-header'}>

            <div className={'flex'}>
                <button onClick={()=>nav('/')}>Shop</button>
                <button onClick={()=>nav('/createproduct')}>Create product</button>
            </div>

            <div className={'flex'}>
                <button onClick={()=>nav('/shoppingcart')}>My Cart</button>
                <div>Titles: <mark>{cart.length}</mark></div>
                <div>Items: <mark>{cart.reduce((sum, a) => sum + a.ammount, 0)}</mark></div>
            </div>
            {/*arr.reduce((a, b) => ({x: a.x + b.x}))*/}
        </div>
    );
};

export default TopHeader;

//