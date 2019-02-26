import React from 'react';
import AdminNav from './AdminNav';
import DisplayItems from './DisplayItems';
import './Admin.css';

export default function Inventory(){
    return(
        <div className='allProducts'>
        <AdminNav/>
        <DisplayItems/>
        </div>
    )
}

