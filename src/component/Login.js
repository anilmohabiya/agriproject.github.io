
import React from 'react';
import Footer from './Footer';
import foot from '../images/Logo-2.png';
import { NavLink } from 'react-router-dom';
const Refer=()=>{


  return (
    <>
    <div className="container-fluid ">
      <div className="row">
        <div className=" col-md-8 col-11 mx-auto shadow">
        <div className="row">
          <div className=" col-md-6 col-11 mx-auto abcd ">
               <br/>
          <NavLink to="#" class="navbar-brand mt-1 pl-5">
            <img src={foot} height="172"  alt="CoolBrand " />
        </NavLink> 

        <div className=" text-light   p-5"> 
        <h4 className=" text-left pl-2">Hey...</h4>
        <h4 className=" font-weight-bold text-left pl-2">if you are new here !!!</h4>
        <p className=" text-left pl-2"> <small> Sign Up with your mobile number to get started</small></p>

        </div>
        
        <div className="d-none d-md-block  hr2 mt-2 mb-5">
     </div>

          </div>

            {/*  right side   */}
          <div className=" col-md-6 col-11 mx-auto mt-2 car">
          <div className=" bg-img">
          <form >
  <div class="mb-3 mt-5 textbox1 ">
  
  <i class="fa fa-user  " aria-hidden="true"></i>
    <input type="email" class=" lh-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder
      ="Email/MobileNumber"
    />
  </div>
  <div class="mb-3 textbox1 mt-2">                
  <i class="fa fa-lock  " aria-hidden="true"></i>
    <input type="password" class=" lh-5" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="mb-3 form-check mt-3">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me Logged in</label>
  </div>
  <NavLink to="#"><button class="btn btnLarge w-100 mt-1 text-white" type="button">Login</button></NavLink>

</form>
<div className=" mt-3 text-center danger"><p><small>dont have an account?
 <span> <NavLink to="/Signup" className=" text-decoration-none mt-2 danger">Sign up</NavLink><br/>
 
 <NavLink to="/" className=" text-decoration-none mt-2 text-dark">Forgot Password?</NavLink></span> </small></p>
 <br/><br/>

        <div className=" d-none d-md-none d-lg-block   mb-5 hr1">
        {/* <hr className=" hr1  text-secondary d-none d-lg-block " size="5"/>
         */}
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
     </div>
{/*         
       
<button type="button" class="btn buttoncircle btn-secondary ">Secondary</button>  */}
       <div className="pad">
       <p><span class="small px-1 d-md-block d-none text-white">O
       <span className="are">R</span></span></p>
       </div>
     <button class=" buttoncircle text-center d-md-block d-none ">Sell With Us</button>
        
    <Footer/>
    </>


  );
}





export default Refer;