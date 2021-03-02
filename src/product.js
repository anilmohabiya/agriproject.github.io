import React from 'react';

import { Link} from 'react-router-dom/cjs/react-router-dom.min';

import ss2 from './images/shopping 1.png';
import ss3 from './images/ss2.png';
const Product =()=>{
    return(
        <>

<div className=" container">
       <div className=" row">
           <div className="col-md-4 mt-4">
           <img src={ss3} className=" img-fluid w-100" alt={ss3}/>
           </div>
               <div className="  col-md-8  mt-4">
            <h5 className=" font-weight-bold">Pumpkin seeds</h5>
            <small className=" text-secondary">Flare Seeds Seeds Rare Pumpkin Seeds For<br/> 
            Home Gardening 20 Exotic Seeds Pack Seed</small>
              
            
 <div className=" col-md-12   mx-auto d-flex mt-3">
 <div className="  border border-navy">
 <label>Qty</label>&nbsp;
<select className=" border-0" >
    <option className="small"> 500gm</option>
    <option className="small">1000gm</option>

</select>
 </div>
<small className="  pl-5">Rs.300</small>
 </div>
 <div className=" col-md-4 mt-3">
 <Link to="#" type="button" class="btn btn-success border-radius-bb1">ADD TO CART</Link> </div>


 <div className="row mt-3">
     <div className=" col-md-2  font-weight-bold">
      <p className="">Description: </p>
     </div>
     <div className=" col-md-10 fallow1 pl-sm-5 font-weight-normal">
        <small className="">
        SOW SEEDS DIRECTLY 5-6 INCHES APART IN ROWS IN WELL MANURED
        SOIL. SHOULD BE FREELY WATERED IN DRY WEATHER. FLOWERS,
        FRUITS,
      VEGETABLES AND PLANTS NEEDS GOOD SOIL IN ORDER TO GROW UP 
      STRONG AND HEALTHY.
        </small>
</div>
 </div>


               </div>
 
 <p className=" mt-5 font-weight-bold">Highlights</p>

 <p className=" font-weight-normal">Seeds Type: Vegitables <br/>Suitable For: Outdoor
 <br/>Organic Plant Seeds <br/>Seed For: SEEDS Rare Pumpkin Seeds For 
 Home Gardening 20 Exotic Seeds Pack<br/>Quantity: 500 gm</p>
 

               
            
                  
             </div>
       </div>

       <div className=" container-fluid">
         
       <p className=" font-weight-bold">Similar Product</p>
       <div class="row ">
       <div className=" col-md-11">
            <div class="row ">
            <div className=" col-md-4 mt-3">
            <div class="card mainborders">
            <div className="half">
            <div className=" p-4">
                
  <img src={ss2}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-1 pl-4"> Capsicum Green Vegetable seeds</p>
  <div class="card-body p-0">
   <p className="fallow pl-4 pr-4">Some quick example text to build on the card 
    title and make up the bulk of the card's content</p>
   <div className="row pl-2"> 
 <div className=" col-md-6 col-12 col-sm-12  mx-auto d-flex pl-4">
 <label>Qty</label>&nbsp;
<select className=" border-0" >
    <option className="small"> 500gm</option>
    <option className="small">1000gm</option>
</select>
 </div>
 <div className=" col-md-6 col-12  col-sm-12 mx-auto pl-4">
     <small>Rs.300</small>
 </div>
 </div>
<div className="text-center border-top pb-2 pt-2 mt-1">



<Link to="#" class="btn btn-success text-center mt-2 bb"> ADD TO CART</Link>
</div>
</div>
 </div>
 
</div>

      
           </div>

           <div className=" col-md-4 mt-3">
            <div class="card mainborders">
            <div className="half">
            <div className=" p-4">
                
  <img src={ss2}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-1 pl-4"> Capsicum Green Vegetable seeds</p>
  <div class="card-body p-0">
   <p className="fallow pl-4 pr-4">Some quick example text to build on the card 
    title and make up the bulk of the card's content</p>
   <div className="row pl-2"> 
 <div className=" col-md-6 col-12 col-sm-12  mx-auto d-flex pl-4">
 <label>Qty</label>&nbsp;
<select className=" border-0" >
    <option className="small"> 500gm</option>
    <option className="small">1000gm</option>
</select>
 </div>
 <div className=" col-md-6 col-12  col-sm-12 mx-auto pl-4">
     <small>Rs.300</small>
 </div>
 </div>
<div className="text-center border-top pb-2 pt-2 mt-1">



<Link to="#" class="btn btn-success text-center mt-2 bb"> ADD TO CART</Link>
</div>
</div>
 </div>
 
</div>

      
           </div>
           


           <div className=" col-md-4 mt-3">
            <div class="card mainborders">
            <div className="half">
            <div className=" p-4">
                
  <img src={ss2}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-1 pl-4"> Capsicum Green Vegetable seeds</p>
  <div class="card-body p-0">
   <p className="fallow pl-4 pr-4">Some quick example text to build on the card 
    title and make up the bulk of the card's content</p>
   <div className="row pl-2"> 
 <div className=" col-md-6 col-12 col-sm-12  mx-auto d-flex pl-4">
 <label>Qty</label>&nbsp;
<select className=" border-0" >
    <option className="small"> 500gm</option>
    <option className="small">1000gm</option>
</select>
 </div>
 <div className=" col-md-6 col-12  col-sm-12 mx-auto pl-4">
     <small>Rs.300</small>
 </div>
 </div>
<div className="text-center border-top pb-2 pt-2 mt-1">



<Link to="#" class="btn btn-success text-center mt-2 bb"> ADD TO CART</Link>
</div>
</div>
 </div>
 
</div>

      
           </div>

          
        
           </div>
           </div>
         <div className= "col-md-1 btnPadding">

            <button className=" btn-lg "><i class="fas fa-greater-than"></i> </button> 
{/*            
<button type="button" class="btn btn-outline-info
  btnarrow w-50 h-50"><i class="fas fa-greater-than "></i></button>*/}
         </div> 

           </div></div>
      
       

        </>
    )
}

export default Product;