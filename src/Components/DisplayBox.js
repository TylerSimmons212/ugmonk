import React from 'react';
import {Link} from 'react-router-dom';
export default function DisplayBox(props) {
    let {title, description, image, color} = props
    let imageSrc = `url(${image})`
 return(
         <div className='category clothing'>
                    <div className='words' style={{backgroundColor:color}}>
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                    <Link to='/shop/clothing-all'>
                        <button className='btn'>Shop {title} <i className="fas fa-long-arrow-alt-right"></i></button>
                    </Link>
                    </div>
                    <div className='category__background' style={{backgroundImage:imageSrc}}></div>
                </div> 
 )
}