import React from 'react';

import logo from './images/ss.png';

import logo1 from './images/ss2.png';


const Cart =()=>{
    return(

        <>
          <div className=" container-fluid">
              <div className=" row">
              <div className=" col-md-10 col-10 mx-auto">

           
<nav class="navbar navbar-light bg-light mt-5" >
  <div class="container-fluid">
    <span class="navbar-text font-weight-bold">
     Order History:
    </span>
  </div>
</nav>
<div className=" card mt-5 p-4">
 <p>Order : #456765</p>
 <p>Total: Rs.600</p>
<div class="">                
   <div class="post-thumb"><img src={logo} alt={logo} /></div>
   <div class="post-title">Kidney Seeds <br/>Qty 2Kg <br/>Price:300 Rs&nbsp; &nbsp; &nbsp; &nbsp;
   &nbsp; <button type="button" class="btn btn-outline-primary btn-sm text-dark">View</button></div>
   
   
</div>
<div className=" mt-5">                
   <div class="post-thumb"><img src={logo1} alt={logo1} /></div>
   <div class="post-title">Kidney Seeds <br/>Qty 2Kg <br/>Price:300 Rs&nbsp; &nbsp; &nbsp; &nbsp;
   &nbsp; <button type="button" class="btn btn-outline-primary btn-sm text-dark">View</button></div>
   
   
</div>

<div className=" text-right">
<button type="button" class="btn btn-outline-primary text-secondary mb-2 mt-2 mr-4">Show More</button>

</div>
   </div>
   </div>

   
          </div>
          </div>
      

       
          
        </>
    )
}
export default Cart;