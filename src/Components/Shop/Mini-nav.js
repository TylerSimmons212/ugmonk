import React from 'react';
import {Link} from 'react-router-dom';
import './Mini-nav.css'
export default function Mininav () {
    return(
    <div className='mini-nav'>
        <Link to='/shop/clothing-all'><button>Clothing</button></Link>
        <Link to='/shop/workspace'><button>Workspace</button></Link>
        <Link to='/shop/everyday-carry'><button>Everyday Carry</button></Link>
        <Link to='/shop/prints'><button>Prints</button></Link>
        </div>
    )}