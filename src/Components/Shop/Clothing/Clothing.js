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
            <Link to='/shop/clothing-tees'><button>Tees</button></Link>
            <Link to='/shop/clothing-hoodies'><button>Crewnecks & Hoodies</button></Link>
            <Link to='/shop/clothing-hats'><button>Hats</button></Link>
            <Link to='/shop/clothing-kids'><button>Kids</button></Link>            
        </nav>
        <ProductDisplay cat='clothing' type='tees'/>
        <ProductDisplay cat='clothing' type='hoodies'/>
        <ProductDisplay cat='clothing' type='hats'/>
        <ProductDisplay cat='clothing' type='kids'/>
        <Email/>
        <Footer/>
    </div>
)}