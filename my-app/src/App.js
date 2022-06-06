import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';



function App() {
  return (
   <Router>

    <Navbar/>

    <Sidebar/>

     <Switch>
       <Route path='/' exact>
         <Home/>
       </Route>

       <Route path='/about' >
         <About/>
       </Route>

       <Route path='/cart' >
         <Cart/>
       </Route>

       <Route path='/products' >
         <Products/>
       </Route>

       <Route exact path='products/:id' children={<SingleProduct/>}/>
       
       <Route path='/checkout' >
         <Checkout/>
       </Route>

       <Route path='*' >
         <Error/>
       </Route>

     </Switch>

     <Footer/>
     
   </Router>
  );
}

export default App;
