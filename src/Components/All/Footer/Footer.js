import React from 'react';
import {Link} from 'react-router-dom'
import Image from './images/ugmonkLogo.jpg'
import './Footer.css'
export default function Footer(){
    return(
        <div className='footer'>
        <div className='f-top'>
            <div className='f-left'>
                <h1>Customer Service</h1>
                <Link to='/FAQ'><h2>Help / FAQ</h2></Link>
                <Link to='/FAQ'><h2>Returns & Exchanges</h2></Link>
                <Link to='/about'><h2>Contact Us</h2></Link>
            </div>
            <div className='f-right'>
                <h1>About</h1>
                <Link to='/about'><h2>Our Story</h2></Link>
                <Link to='/about'><h2>Resources</h2></Link>
                <Link to='/shop'><h2>Shop</h2></Link>
            </div>
        </div>
            <div className='f-bottom'>
                <img src={Image} alt='logo'/>
                <p>© Ugmonk, Inc. 2019</p>
            </div>
        </div>
    )
}