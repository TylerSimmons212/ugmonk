import React, {Component} from 'react';
import axios from 'axios';
import './Admin.css'

import Item from './Item'
class DisplayItems extends Component{
    constructor(){
        super()
        this.state={
            items:[],
            edit: false,
            newItems:[]
        }
    }
    componentDidMount(){
        axios.get(`/api/inventory`)
        .then(res => {
            console.log(res.data);
            
            this.setState({items:res.data})})
        .catch(err => {console.log(err)})
        console.log(this.state.items);
    }

    addToInventory(){
        return(
            <div className='items'>
                    <p>ImageURL: <input placeholder='Image URL'></input></p>
                    <div className='items-info'>
                        <h1><span className='strong'>Name</span>: <input placeholder='Product Name'></input></h1>
                        <h3><span className='strong'>Price</span>: <input placeholder='Price'></input></h3>
                        <h3><span className='strong'>Category</span>: <input placeholder='Category'></input></h3>
                        <h3><span className='strong'>Type</span>: <input placeholder='Type'></input></h3>
                        <h3><span className='strong'>Amount</span>: <input placeholder='Quantity'></input></h3>
                    </div>
                </div>
        )
    }




    render(){
        let products = this.state.items.map(val=>{
            return <Item item={val} />
        })
        return(
            <div>
                <span className='icon'><i class="fas fa-plus" onClick={()=>{this.addToInventory()}}></i></span>
                {products}                
            </div>
        )
    }
}
export default DisplayItems