import React from 'react';
import { Link, NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import foot from '../images/sun 2.png';
import bb from '../images/bah.png';
import usa from '../images/usa.png';

import logo from '../images/logo.png';
import profile from '../images/profile.png';
import dollar from '../images/dollar.png';
import weather from '../images/weather.png';
import shop from '../images/shop.png';
import logout from '../images/logout.png';
import seed from '../images/seed.png';
import fertilizer from '../images/fertilizer.png';
import notification from '../images/notification.png';
const Navbar = () => {
  return (
    <>
      <div class="top-bar ">
        <div class="container">
          <div class="row d-flex align-items-center ">
            <div class="col-md-7  col-9 d-flex">
            <div className="  mt-3 pr-md-4 ">
           
          
            <p className=" border border-light p-2"> <i class="fa fa-map-marker text-light">

            </i> Maharastra</p>
            </div>    
            <div className="  mt-3 pl-md-4 ">
           
            <div class="dropdown  pr-md-2">
                    <button class=" btn btn-sm dropdown-toggle justify-content-center align-content-center 
                    pl-md-4 pr-md-4
                   text-white                
                   " type="button"
                      id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="fa fa-globe text-white" aria-hidden="true"></i> <span className=" text-white"> Language(EN)</span>
                 </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton ">
                      <Link class="dropdown-item text-decoration-none" to="#"> <img src={usa} alt={usa}/>  USA</Link>
                      <Link class="dropdown-item text-decoration-none" to="#">  <img src={bb} alt={bb}/> BDH</Link>
                      <Link class="dropdown-item text-decoration-none" to="#">  <img src={usa} alt={usa}/> USA </Link>
                    </div>
                  </div>


            </div>

            <div className="  mt-3 pr-md-4  d-none  d-lg-block ">
           
           <img src={foot} alt={foot} class=" container-fluid "/>

           
           </div> 
          
           <div className="  mt-2 pr-md-4  d-none d-lg-block">
          &nbsp; &nbsp; &nbsp;<span className=""> C | F</span>
           <p>32.4 <br/><small>sunset 6.23 PM</small></p>
           

           
           </div>

            </div>
            <div class="col-md-5  col-3">
              <div class="d-flex justify-content-md-end justify-content-between ">
              
               
        
               
              <div class=" ps-1 d-flex justify-content-end align-items-center pl-md-4 pr-1">
            <i class="fa fa-user text-white  small pe-2 pr-2"> 
             </i><span className=" border-right pr-2">Login</span><Link to="" class="header-link 
            text-white  small text-decoration-none">
            </Link>
           </div>



                  <div class=" ps-1 d-flex justify-content-end align-items-center pl-md-4">
            <i class="fa fa-user text-white d-block d-md-none small pe-5"></i><Link to="#" class="header-link 
            text-white  small text-decoration-none"><span class="small
             d-none d-md-block"><button className=" text-white border-success bg-success d-none d-md-block ">sign up</button></span>
            </Link>
           </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="row">
      <div className="container-fluid">
      <div className="col-md-12 col-12 mx-auto">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light card shadow">
  <div className="container-fluid">
  <NavLink to="#" class="navbar-brand mx-auto">
            <img src={logo} class="logo img-fluid pl-md-3" alt="CoolBrand " />
        </NavLink> 
        <div className ="col-md-10 col-10 mx-auto">
        <nav class="nav nav-pills flex-column flex-sm-row mt-2 text-center">
        <Link class="flex-sm-fill text-sm-center nav-link elements text-success font-weight-bold mt-md-2" to="/shop">Home</Link>
        <li class="nav-item dropdown nav-link dmenu">
            <a class="nav-link flex-sm-fill text-sm-center nav-link elements dropdown-toggle text-dark font-weight-bold" to="#"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   data-toggle="dropdown">
             Shop
            </a>
            <div class="dropdown-menu sm-menu">
              <Link class="dropdown-item" to=""><img src={seed} class="menu" alt="CoolBrand "/>&nbsp;&nbsp;Seeds</Link>
              <Link class="dropdown-item" to="#"><img src={fertilizer} class="menu" alt="CoolBrand "/>&nbsp;&nbsp;Fertilizers</Link>
            </div>
          </li>
        <Link class="flex-sm-fill text-sm-center nav-link elements font-weight-bold text-dark mt-md-2" to="/profile">About Us</Link>
        <Link class="flex-sm-fill text-sm-center nav-link elements text-dark font-weight-bold mt-md-2" to="/product">Contact Us</Link>
        <li class="nav-item dropdown nav-link dmenu">
        <a class="nav-link flex-sm-fill text-sm-center nav-link elements dropdown-toggle text-dark font-weight-bold" href="#"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   data-toggle="dropdown">
            More
            </a>
            <div class="dropdown-menu sm-menu">
              <Link class="dropdown-item" to="/shop"><img src={profile} class="menu" alt="CoolBrand "/>&nbsp;&nbsp;My Profile</Link>
              <Link class="dropdown-item" to="#"><img src={dollar} class="menu" alt="CoolBrand " />&nbsp;&nbsp;My Wallet</Link>
              <Link class="dropdown-item" to="#"><img src={weather} class="menu" alt="CoolBrand " />&nbsp;&nbsp;Weather</Link>
              <Link class="dropdown-item" to="#"><img src={notification} class="menu" alt="CoolBrand " />&nbsp;&nbsp;Notification</Link>
              <Link class="dropdown-item" to="#"><img src={shop} class="menu" alt="CoolBrand " />&nbsp;&nbsp;My Order</Link>
              <Link class="dropdown-item" to="#"><img src={logout} class="menu" alt="CoolBrand " />&nbsp;&nbsp;Log Out</Link>
            </div>
          </li>
        <Link class="flex-sm-fill text-sm-center nav-link elements" to="/product"><i class="fa fa-search fa-2x text-dark" aria-hidden="true"></i></Link>
        <Link class="flex-sm-fill text-sm-center nav-link elements" to="/cart"><i class="fa fa-shopping-cart fa-2x text-dark pr-md-5" aria-hidden="true"></i></Link>
      </nav>
      </div>
  </div>
</nav>



{/* <div class="form-group col-12">
          <hr/>
          </div>  */}
      </div>
     
      </div>
      </div>




           

    </>
  );
};
export default Navbar;