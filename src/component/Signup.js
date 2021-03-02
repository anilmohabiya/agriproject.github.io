
import React from 'react';
import Footer from './Footer';

import foot from '../images/Logo-2.png';

import { NavLink } from 'react-router-dom';
const Signup=()=>{


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-8 col-11 mx-auto">
        <div className="row">
          <div className=" abcd col-md-6 col-11 mx-auto  mt-3 card shadow">
    
               <br/><br/>
          <NavLink to="#" class="navbar-brand  pl-5">
            <img src={foot} height="169"  alt="CoolBrand " />
        </NavLink> 

        <div className=" text-light mb-5  text-left p-5">   
         <h4 className=" text-left pl-2">Hey...</h4>
        <h4 className=" font-weight-bold text-left pl-2">if you are new here !!!</h4>
        <p className=" text-left pl-2"> <small> Sign Up with your mobile number to get started</small></p>


        </div>
        {/* using br tag to make a border on a center  */}
       
        <div className="col-12  hr2 mt-5 mb-5">
     </div>
  

          </div>

            {/*  right side   */}
          <div className=" col-md-6 col-11 mx-auto mt-3 card shadow">
          <div className=" bg-img">
          <form >
           <br/>
          <div class="mb-3  textbox1 mt-4">
  
  <i class="fa fa-user " aria-hidden="true"></i>
    <input type="text" class="" id="exampleInputEmail1" aria-describedby="text" placeholder
      ="Name"
    />
  </div>
  <div class="mb-3  textbox1 ">
            
            <i class="fas fa-envelope "></i>
    <input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder
      ="Email id"
    />
  </div>
  <div class="mb-3  textbox1 ">
  
  <i class="fas fa-mobile "></i>
    <input type="Number" class="" id="exampleInputEmail1" aria-describedby="Number" placeholder
      ="Mobile Number"
    />
  </div>
  <div class="mb-3 textbox1">                
  <i class="fa fa-lock " aria-hidden="true"></i>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="mb-3 textbox1">                
  <i class="fa fa-lock " aria-hidden="true"></i>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>

  <NavLink to="#"><button class="btn btnLarge w-100" type="button">Register</button></NavLink>

</form>
<div className=" mt-3 text-center danger shadow-sm ">  <p><small>Existing User?
 <span> <NavLink to="/Refer" className=" text-decoration-none danger">Login</NavLink><br/>
 </span> </small></p>
       
</div>
 <br/>
<div className="col-12  hr1 mb-5">
     </div>

     <br/>
     <br/>
     <br/>
     </div>
          </div>
        </div>



  

     </div>
     </div>
     </div>
        
       <div className="pad1">
       <p><span class="small px-1 d-md-block d-none text-white">O<span className=" text-dark font-weight-bold">R</span></span></p>
       </div>
     <button class=" buttoncircle1 text-center d-md-block d-none">Sell With Us</button>
        
    <Footer/>
    
    </>


  );
}





export default Signup;