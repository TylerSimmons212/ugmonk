import React from 'react';

const editItem = (props) => {
    return(
        <div className='items'>
                    <p>ImageURL: <input placeholder='Image URL' name='image_url' onChange={props.change}></input></p>
                    <div className='items-info'>
                        <h1><span className='strong'>Name</span>: <input placeholder='Product Name' name='product_name' onChange={props.change}></input></h1>
                        <h3><span className='strong'>Price</span>: <input placeholder='Price' name='price' onChange={props.change}></input></h3>
                        <h3><span className='strong'>Category</span>: <input placeholder='Category' name='category' onChange={props.change}></input></h3>
                        <h3><span className='strong'>Type</span>: <input placeholder='Type' name='type' onChange={props.change}></input></h3>
                        <h3><span className='strong'>Amount</span>: <input placeholder='Quantity' name='amount' onChange={props.change}></input></h3>
                        <div className='icon done'><i className="far fa-check-circle" onClick={props.submit}></i></div>                        
                        <div className='icon done'><i className="fas fa-trash-alt"></i></div>
                        </div>
        </div>
    )
}

export default editItem