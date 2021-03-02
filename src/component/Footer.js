import React from 'react';

import logo from '../images/logo.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

import twitter from '../images/twitter.png';

import linkedin from '../images/linkedin.png';


import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div class="container-fluid ftColor mt-5">
                <div class="container">
                    <div class="row py-4 gy-3">
                        <div class="col-md-4 text-center text-md-left text-white">
                            <h5 class="text-white">Quick Links</h5>

                            <p><small class="text-white">About</small></p>
                            <p><small class="text-white">FAQs</small></p>
                            <p><small class="text-white">Privacy Policy</small></p>
                            <p><small class="text-white">Terms and Conditions</small></p><br />
                            <div className=" col-sm-12">

                                <Link to="#" class="fab fa-insta "><img src={facebook} className=" w-100"alt={facebook}/></Link>

                                <Link to="#" class="fab fa-insta"><img src={linkedin} className=" w-100"alt={linkedin}/></Link>
                                <Link to="#" class="fab fa-insta"><img src={twitter} className=" w-100"alt={twitter}/></Link>
                                <Link to="#" class="fab fa-insta  "><img src={instagram} className=" w-100"alt={instagram}/></Link>


                            </div>
                            {/* <Link to="" class="link facebook"><span class="fa fa-facebook "></span></Link>
                        <a href="" class="link twitter ml-2"><span class="fa fa-facebook-square"></span></a>
                        <a href="" class="link google-plus ml-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="" class="link google-plus ml-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </div> */}
                        </div>
                        <div class="col-md-3 text-center text-md-left text-white">
                            <h5 class="text-white">Our Product</h5>
                            <p><small class="text-white">Seeds</small></p>
                        </div>
                        <div class="col-md-5 text-center text-md-left text-white ">
                            <div className=" pl-md-5">
                                <h5 class="text-white">Contact</h5>
                                <p><small class="text-white"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;+91 999999</small></p>
                                <p><small class="text-white"><i class="fa fa-envelope" aria-hidden="true"></i><span>&nbsp;&nbsp;@abcdgmail.com</span></small></p>
                            </div><br /><br /><br />
                            <img src={logo} class="logo-footer" alt="CoolBrand " />
                            <p>@2020,Farmer Alliances for bussiness-All rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;