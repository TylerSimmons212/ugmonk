import React from 'react';
import Footer from '../../All/Footer/Footer'
import Navbar from '../../All/Navbar'
import Email from '../../All/Email/Email'
import Mininav from '../Mini-nav'
import {Link} from 'react-router-dom'
import ProductDisplay from '../../ProductDisplay'
export default function (){
    return (
    <div>
        <Navbar/>
        <Mininav/>
        <nav className='s-nav'>
            <Link to='/shop/mousepads'><button>Mousepads</button></Link>
            <Link to='/shop/accessories'><button>Accessories</button></Link>
            <Link to='/shop/sketchbooks'><button>Sketchbooks</button></Link> 
        </nav>
        <ProductDisplay cat='workspace' type='mousepads'/>
        <ProductDisplay cat='workspace' type='accessories'/>
        <ProductDisplay cat='workspace' type='sketchbooks'/>
        <Email/>
        <Footer/>
    </div>
)}