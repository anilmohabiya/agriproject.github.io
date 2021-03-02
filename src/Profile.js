import React from 'react';

const Profile =()=>{
    return(
        <>
        <p className="p-5">home/more/profile</p>

        <div className=" container-fluid">
            <div className="row">
           <div className=" col-md-10 col-12 mx-auto">

           <div className=" card p-5 bg-light mainborders">
               <h5 className=" font-weight-bold">Personal information  &nbsp;
                <span className=" text-primary ml-md-4">Edit</span></h5>


                <div className="row">
                 <div className=" col-6 col-md-6 mx-auto">

                  <p className=" font-weight-bold">First Name</p>
                  <p className=" text-secondary">jhon</p>

                  

                 </div>
               
                <div className=" col-6 col-md-6 mx-auto">

               <p className=" font-weight-bold">Last Name</p>
               <p className=" text-secondary" >smith</p>
                </div>
                </div>

            
                <p className=" font-weight-bold">Mobile Number</p>
                <p className=" text-secondary">9787552645</p>


                
                <p className=" font-weight-bold">Email ID</p>
                <p className=" text-secondary">jhon12@gmail.com</p>
                <div className=" col-md-4 col-12">
                    
                
              <button type="button" class="btn btn-light bg-gray bb1 circle btn-lg border border-1 ">Change Password</button>
                 
                </div>

                   

                
                </div>                

           </div>

         
           <div className=" col-md-10 col-12  mt-3 mx-auto">
               <div className=" card  bg-light p-5 mainborders">

                  <p className=" font-weight-bold">Save address</p>
                  <p className=" text-secondary"> D902, hollycross solitre , near NRC School, Thane
                  ,Maharastra pincode-400059</p>
                  
           <p className=" text-right text-decoration-underline text-danger">ADD NEW ADDRESS</p>
           
               </div>

           </div>

           </div>
            </div>
     
        </>
    )
}
export default Profile