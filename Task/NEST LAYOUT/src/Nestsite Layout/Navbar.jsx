import React from 'react'
import './style.css'
import Logo from './Logo'
// import { red } from '@mui/material/colors'

import Badge from '@mui/material/Badge';
function Navbar() {
    return (
        <>
            <div className='nav-one'>
                <div>
                    <a href='#About us'> About Us  | </a>
                    <a href='#My Account'> My Account | </a>
                    <a href='#Wishlist'> Wishlist | </a>
                    <a href='#order Tracking'> Oder Tracking | </a>
                </div>
                <div>
                    <span>  Supper Value Deals- Save more with cupons </span>
                </div>
                <div>
                    <span> Need help? Call Us: + <span style={{ color: "green" }}> <b>1800900 </b></span> | </span>
                    <select>
                        <option> English</option>
                        <option> Hindi </option>
                        <option> Gujarati </option>
                    </select>
                    <select>
                        <option> USD</option>
                        <option> INR </option>
                        <option> CAD </option>
                    </select>
                </div>
            </div>
            <hr />
            <div className='nav-two '>
                <div>
                    <Logo />
                </div>
                <div className='search'>
                    <div className='d-flex gap-2'>
                        <select className='p-2 Categories form-select'>
                            <option> All Categories</option>
                            <option> Milk and Dairies</option>
                            <option> Clorthing and beauty</option>
                            <option> Wine and alcohol </option>
                            <option> Pets food and Toys </option>
                        </select>
                        <input className='searchinput' type='text' placeholder='Search for items...' />
                    </div>
                    <div>
                        <i class="fa-solid fa-magnifying-glass " id='search_icon'></i>
                    </div> &nbsp; &nbsp;
                </div>
                <div>
                    <select class="form-select">
                        <option> Your Location</option>
                        <option> Ahmedabad</option>
                        <option> Gandhinagar</option>
                        <option> Rajkot </option>
                    </select>
                </div>
                <div className='icon-font'>
                    <Badge badgeContent={3} color="success" >
                        <i class="fa-solid fa-recycle" id='icons'> </i>
                    </Badge> &ensp;Compare &ensp;

                    <Badge badgeContent={6} color="success" >
                        <i class="fa-regular fa-heart" id='icons'></i> </Badge> &ensp;Wishlist &ensp;
                    <Badge badgeContent={2} color="success" >
                        <i class="fa-solid fa-cart-shopping" id='icons'></i></Badge> &ensp;Cart
                </div>
            </div>
            <hr />
            <div className='p-3 d-flex' id='Nav-three'>
                <button className='btn btn-success'> <i class="fa-solid fa-table-cells-large"></i> &ensp; Browse All Categories </button>
                <div id='three'>
                    <a href=' '> <i class="fa-solid fa-fire" style={{ color: 'green' }}></i> Deals </a>
                    <a href=' ' style={{ color: "green" }}> <b> Home </b>  </a> &ensp; <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> About </a>
                    <a href=' '> Shop </a>   &nbsp; <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Venders </a> &nbsp;  <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Mega Menu </a> &nbsp;  <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Blog </a> &nbsp;  <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Page </a> &nbsp;  <i class="fa-solid fa-chevron-down down_ar"></i>
                    <a href=' '> Contact </a>
                </div>
                <i class="fa-solid fa-headphones headphones"></i>
                <div className='d-flex flex-column contact'>
                    <span className='number'> <b> 1900-888</b></span>
                    <span> 24/7 Supoort Center</span>
                </div>
            </div>
            <hr />
        </>
    )
}
export default Navbar