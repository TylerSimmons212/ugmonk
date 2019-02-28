import React from 'react';
import {Link} from 'react-router-dom';
import '../All/Navbar.css'
import './Admin.css'
import AdminNav from './AdminNav';
export default function Admin (){
    return (
    <div>
        <AdminNav/>
        <div className='outer-box inventory-box'>
            <Link to='/inventory' className='inner-box'><button>View Inventory</button></Link>
            <Link to='/posts' className='inner-box'><button>View Posts</button></Link>
            <Link to='/orders' className='inner-box'><button>View Orders</button></Link>
        </div>
    </div>
)}
