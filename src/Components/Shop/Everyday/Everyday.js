import React from 'react';
import Footer from '../../All/Footer/Footer'
import Navbar from '../../All/Navbar'
import ProductDisplay from '../../ProductDisplay'

import Email from '../../All/Email/Email'
import Mininav from '../Mini-nav'
import {Link} from 'react-router-dom'
export default function (){
    return (
    <div>
        <Navbar/>
        <Mininav/>
        <nav className='s-nav'>
            <Link to='/shop/bags'><button>Bags</button></Link>
            <Link to='/shop/wallets'><button>Wallets</button></Link> 
        </nav>
        <ProductDisplay cat='everyday' type='bags'/>
        <ProductDisplay cat='everyday' type='wallets'/>
        <Email/>
        <Footer/>
    </div>
)}