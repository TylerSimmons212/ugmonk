import React from 'react';
import '../Home.css'
import Footer from '../All/Footer/Footer'
import Navbar from '../All/Navbar'
import Email from '../All/Email/Email'
import Mininav from './Mini-nav'
export default function (){
    return (
    <div>
        <Navbar/>
        <Mininav/>
        <Email/>
        <Footer/>
    </div>
)}