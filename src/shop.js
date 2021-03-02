import React from 'react';

import { Link} from 'react-router-dom/cjs/react-router-dom.min';
import seed from './images/flax-seed (1) 1.png';

import soil from './images/planting 1.png';

import fertilizer from './images/fertilizer 1.png';

import ss from './images/ss.png';
import ss2 from './images/ss2.png';


const Shop=()=>{
    return(
        <> 
        <div className=" container-fluid">
            <div className=" row ">

              <div className=" col-md-2 "></div>
           
              
            <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-block mx-auto mt-2  border-primary">
                <figure className="figure  ">
                
               <div className=" p-2 rondedbox">
               <img src={seed} className="figure-img img-fluid rounded-circle pt-2 pr-2 pl-2  "  
               alt={seed}/>
               </div>
                   <div class=" hr3 col-md-12 col-12"></div>
                     <p className=" text-center font-weight-bold">seeds</p>
                   
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-block mx-auto mt-2  border-primary">
                <figure className="figure  ">
                
               <div className=" p-2 rondedbox">
               <img src={fertilizer} className="figure-img img-fluid rounded-circle pt-2 pr-2 pl-2  "  
               alt={fertilizer}/>
               </div>
                   <div class=" hr3 col-md-12 col-12"></div>
                     <p className=" text-center font-weight-bold">seeds</p>
                   
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-block mx-auto mt-2  border-primary">
                <figure className="figure  ">
                
               <div className=" p-2 rondedbox">
               <img src={soil} className="figure-img img-fluid rounded-circle pt-2 pr-2 pl-2  "  
               alt={soil}/>
               </div>
                   <div class=" hr3 col-md-12 col-12"></div>
                     <p className=" text-center font-weight-bold">seeds</p>
                   
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-6 d-block mx-auto mt-2  border-primary">
                <figure className="figure  ">
                
               <div className=" p-2 rondedbox">
               <img src={fertilizer} className="figure-img img-fluid rounded-circle pt-2 pr-2 pl-2  "  
               alt={fertilizer}/>
               </div>
                   <div class=" hr3 col-md-12 col-12"></div>
                     <p className=" text-center font-weight-bold">seeds</p>
                   
                </figure>
            </div>
            <div className=" col-md-2"></div>
            </div>
        </div>
        
          <div className="container">
               
      <p className="fallow mb-4">shop/seeds</p>
     
          </div>
        
             <div className=" container"> 
            <div class="row">
            <div className=" col-md-4 mt-3">
            <div class="card mainborders">
            <div className="half">
            <div className=" p-4">
                
  <img src={ss2}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-4 pl-4">Pumkin seed</p>
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
                
  <img src={ss}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-4 pl-4">Spinach Seeds / Palak Seeds
</p>
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
  
  <p class="card-title font-weight-bold mt-4 pl-4">Pumkin seed</p>
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
   
 
           <div className=" container"> 
            <div class="row">
            <div className=" col-md-4 mt-3">
            <div class="card mainborders">
            <div className="half">
            <div className=" p-4">
                
  <img src={ss2}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-4 pl-4">Pumkin seed</p>
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
                
  <img src={ss}class="card-img-top " alt="..."/>
            </div>
  
  <p class="card-title font-weight-bold mt-4 pl-4">Spinach Seeds / Palak Seeds
</p>
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
  
  <p class="card-title font-weight-bold mt-4 pl-4">Pumkin seed</p>
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

         <div className=" text-right mt-4">
         <button type="button" class="btn btn-danger mb-5">Show More +</button>
         </div> 
        
           </div>
           </div>
   




        </>

    );
};

export default Shop;