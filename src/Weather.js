import React from 'react';
import cloud from './images/ss3.png';

const Weather =()=>{
    return(
        <>

       <div className=" container">
       <div className=" row">
           <div className=" col-12 col-md-6 mx-auto mt-5">
               <div className =" card text-center">
               <div className="row">
               <div className="col-md-6 col-6">
                <p>Select your State</p>

                <p>Select your Distict</p>

                
                <p className=" ml-md-5">Select your Village/Area</p>

               </div>
                <div className="col-md-6 col-6">
                   <select className=" border-light   bg-light border-secondary mt-1">
                       <option></option>
                       <option>Maharastra</option>
                       
                       <option>Delhi</option>
                       <option>MadhyaPradesh</option>
                   </select>

                   <select className=" border-light   bg-light border-secondary mt-3">
                       <option></option>
                       <option>Maharastra</option>
                       
                       <option>Delhi</option>
                       <option>MadhyaPradesh</option>
                   </select>


                   
                   <select className=" border-light   bg-light border-secondary mt-3">
                       <option></option>
                       <option>Maharastra</option>
                       
                       <option>Delhi</option>
                       <option>MadhyaPradesh</option>
                   </select>
                </div>
                </div>

               </div>
               

               
           </div>
           <div className=" container text-center mt-3">
               <p className=" font-weight-bold mt-2">OR</p>
               <button type="button" class="btn btn-success btn-lg mt-2">current location</button>
               </div>
              
              
           <div className="col-md-6 col-12 mx-auto mt-4">
           <div className="row">
           
           <h4 className=" font-weight-normal">Ambivali, maharastra</h4>
                <p className="fallow">
                <small>Tuesday, 3:00 pm</small><br/>
                <small>partly cloudy</small></p>
           <div className="col-md-3 col-3 mx-auto">
              <img src={cloud} alt={cloud} className="weather"/>
               </div>
               
           <div className="col-md-3 col-3 mx-auto">
                    <p className=" text-right mr-md-4">C | F</p>
                   <h3 className="">32.4 </h3>
            

                   
           </div>

               <div className="col-md-6 col-6 temp">
                <p>Precipitation: 36%</p>
                <p>Humidity: 62%</p>
                <p>Wind: 10Km/h</p>

                
               </div>
           
           </div>
           
       </div>
          
     
       </div>
       <div className=" col-12 col-md-6 mx-auto">
        <p className="temp"> Sunset 6:23PM</p>
        <p className=" font-weight-bold">mostly Cloudy throught out the day</p>
           </div>
      

       </div>


       
        </>
    )
}

export default Weather;