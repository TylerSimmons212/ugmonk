import React from 'react';
import Footer from '../../All/Footer/Footer';
import Navbar from '../../All/Navbar';
import ProductDisplay from '../../ProductDisplay';
import Email from '../../All/Email/Email'
import Mininav from '../Mini-nav'
import {Link} from 'react-router-dom'

export default function (){
    return (
    <div>
        <Navbar/>
        <Mininav/>
        <nav className='s-nav'>
            <Link to='/shop/clothing-tees'><button>Tees</button></Link>
            <Link to='/shop/clothing-hoodies'><button>Crewnecks & Hoodies</button></Link>
            <Link to='/shop/clothing-hats'><button>Hats</button></Link>
            <Link to='/shop/clothing-kids'><button>Kids</button></Link>            
        </nav>
        <ProductDisplay cat='clothing' type='hoodies'/>
        <Email/>
        <Footer/>
    </div>
)}