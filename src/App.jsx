import React from 'react'
import Navbar from './Components/Navbar.jsx/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import  ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import  Cart from './Pages/Cart'
import LoginSignu from './Pages/LoginSignu'
import Footer from './Components/Footer/Footer'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"

import { useParams } from 'react-router-dom';

const App = () => {
  return (
    <div>
    
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path = "/vite-react-deploy" element={ <Shop/> }/>
      <Route path = "/mens" element={ <ShopCategory banner={men_banner} category="men" />  }/>
 <Route path = "/womens" element={ <ShopCategory  banner={women_banner} category="women" />  }/>
 <Route path = "/kids" element={ <ShopCategory banner={kid_banner} category="kid" />  }/>

 <Route path = "/product" element={ <Product/> }/>
 <Route path = '/product/:productId' element={ <Product/>  }/>
 {/* <Route/> */}


 <Route path='/cart' element={ <Cart/>} />
 <Route path='/login' element={<LoginSignu/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
