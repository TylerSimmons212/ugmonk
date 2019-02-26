import React from 'react';
import './About.css'
import Navbar from '../All/Navbar'
export default function (){
    return (
    <div>
        <Navbar/>
        <div className='about'>
            <div className='title'>Our Story</div>
            <iframe src="https://player.vimeo.com/video/72791445?app_id=122963" width="640" height="360" frameborder="0" title="Ugmonk by Jeff Sheldon" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
        </div> 
    </div>
)}