import React from 'react';
import Footer from '../All/Footer/Footer';
import Navbar from '../All/Navbar';
import ProductDisplay from '../ProductDisplay';
import Email from '../All/Email/Email';
import Mininav from '../Shop/Mini-nav';

export default function (){
    return (
    <div>
        <Navbar/>
        <Mininav/>
        <ProductDisplay cat='prints' type='null'/>
        <Email/>
        <Footer/>
    </div>
)}