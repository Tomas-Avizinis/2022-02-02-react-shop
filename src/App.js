import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import Products from "./pages/Products";
import MainContext from "./context/MainContext";
import TopHeader from "./components/TopHeader";
import {useState} from "react";
import CreateProduct from "./pages/CreateProduct";
import SingleProduct from "./pages/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";



function App() {

    const nav=useNavigate();

    const [products, setProducts]=useState([
        {
            "title": "Dėžė, tiesiog dėžė",
            "description": 'Dėžė simbolizuoja bet kokį produktą kuris gali joje slėptis (pvz. istorija apie Mažajį princą ir "avies dėžeje" paveikslėlį).',
            "image": "https://cdn.shopify.com/s/files/1/1521/3612/products/sy-carton-box-10-pack-hc58_600_grande.jpg",
            "price": 15.99
        },
        {
            "title": "pienas",
            "description": "Baltas. Gamintojas - karvė.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg",
            "price": 2.09
        },
        {
            "title": "Medus",
            "description": "tirštas ir saldus bičių suneštas medus",
            "image": "https://oily.shop/wp-content/uploads/2020/12/fresh-honey-500x500-1.jpg",
            "price": 5.99
        },
        {
            "title": "Varškė",
            "description": "Gamintojas - Pieno zvaigždės",
            "image": "https://pienozvaigzdes.lt/lt/542-large_default/mu-varske-9-1kg.jpg",
            "price": 1.59
        }
    ]);
    const [currentProduct, setCurrentProduct]=useState();
    const [cart, setCart]=useState([]);
    const [totalPrice, setTotalPrice]=useState(0);

    const showSingleProd=(prod)=>{
        console.log('rodysime tik produkta', prod.title);
        nav(`/product/${prod.title.split(' ').join('')}`);
        setCurrentProduct(prod);
    }

    const addToCart=(prod)=>{

        setTotalPrice(parseFloat((totalPrice + prod.price).toFixed(2)));

        const newProduct=prod;

        if (cart.some(x=>x.title===prod.title)) { //jei tokia preke jau turiu krepselyje
            newProduct.ammount=cart.find(x=>x.title===prod.title).ammount+1;
            setCart(cart.map(x => x.title === prod.title ? newProduct : x));

        } else { // jei tokia preke pirma, ir anksciau jos krepselyje nebuvo
            newProduct.ammount=1;
            setCart([...cart,newProduct])
        }
        nav('/shoppingcart');
    }

    const removeFromCart=(prod)=>{

        setTotalPrice(parseFloat((totalPrice - prod.price).toFixed(2)));

        const productToRemove=prod;
        if (prod.ammount>1) {
            productToRemove.ammount=cart.find(x => x.title===prod.title).ammount-1;
            setCart(cart.map(x => x.title===prod.title? productToRemove: x))
        } else setCart(cart.filter(x => x.title!==prod.title));
    }


  return (
        <MainContext.Provider value={{products, setProducts, cart, setCart, showSingleProd, currentProduct, setCurrentProduct, addToCart, removeFromCart, totalPrice}}>

            <div className="App">
                <TopHeader/>
                  <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/createproduct' element={<CreateProduct/>}/>
                    <Route path='/product/:prod' element={<SingleProduct/>}/>
                    <Route path='/shoppingcart' element={<ShoppingCart/>}/>
                  </Routes>
            </div>

        </MainContext.Provider>


  );
}

export default App;


// https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg
// https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg
// https://oily.shop/wp-content/uploads/2020/12/fresh-honey-500x500-1.jpg
// https://pienozvaigzdes.lt/lt/542-large_default/mu-varske-9-1kg.jpg