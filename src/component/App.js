import React from 'react';


import Navbar from './Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';
import Signup from './Signup';
import Cart from '../Cart';
import Weather from '../Weather';
import Profile from '../Profile';
import Shop from '../shop';
import Product from '../product';
import Footer from './Footer';
const App =()=>{

return(
<>

<Navbar/>
<Switch>
<Route exact path="/" component={Cart} />
<Route exact path="/signup" component={Signup}/>

<Route exact path="/weather" component={Weather}/>

<Route exact path="/profile" component={Profile}/>



<Route exact path="/product" component={Product}/>

<Route exact path="/shop" component={Shop}/>
<Redirect to ="/" />
</Switch>
<Footer/>


</>


  );
};
export default App;
