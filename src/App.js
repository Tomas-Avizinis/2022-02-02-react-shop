import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import MainContext from "./context/MainContext";
import TopHeader from "./components/TopHeader";
import {useState} from "react";
import CreateProduct from "./pages/CreateProduct";
import SingleProduct from "./pages/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";



function App() {

    const [products, setProducts]=useState([
        {
            title: 'Pavadinimas: Dėžė',
            description: 'Aprasymas: Dėžės paveikslėlis simbolizuoja bet kokį produktą kuris gali joje slėptis, žr. istoriją apie Mažajį princą ir avies dėžeje paveikslėlį.',
            image: 'https://cdn.shopify.com/s/files/1/1521/3612/products/sy-carton-box-10-pack-hc58_600_grande.jpg',
            price: 15.99
        },
        {
            title: 'Pavadinimas: Dėžė',
            description: 'Aprasymas: Dėžės paveikslėlis simbolizuoja bet kokį produktą kuris gali joje slėptis, žr. istoriją apie Mažajį princą ir avies dėžeje paveikslėlį.',
            image: 'https://cdn.shopify.com/s/files/1/1521/3612/products/sy-carton-box-10-pack-hc58_600_grande.jpg',
            price: 15.99
        }]);
    const [cart, setCart]=useState([]);
    const [money, setMoney]=useState(1000);




  return (
        <MainContext.Provider value={{products, setProducts, cart, setCart}}>

          <BrowserRouter>
            <div className="App">
                <TopHeader/>
                  <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/createproduct' element={<CreateProduct/>}/>
                    <Route path='/product/:prod' element={<SingleProduct/>}/>
                    <Route path='/shoppingcart' element={<ShoppingCart/>}/>
                  </Routes>
            </div>
          </BrowserRouter>
        </MainContext.Provider>


  );
}

export default App;
