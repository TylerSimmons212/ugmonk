import React, {Component} from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';
import './Admin.css';
class Inventory extends Component{
    constructor(){
        super()
        this.state = {items:[]};
    }
    componentDidMount(){
        axios.get(`/api/inventory`)
        .then(res => {
            console.log(res.data);
            
            this.setState({items:res.data})})
        .catch(err => {console.log(err)})
        console.log(this.state.items);
    }
    render(){
        console.log(this.state.items)
        let products = this.state.items.map(val=>{
            return(
                <div className='items'>
                    <p>ImageURL: {val.image_url}</p>
                    <h1>Name: {val.product_name}</h1>
                    <h3>Price: ${val.price}</h3>
                    <h3>Category: {val.category}</h3>
                    <h3>Type: {val.type}</h3>
                    <h3>Amount: {val.amount}</h3>
                    <i class="far fa-edit"></i>
                </div>
            )
        })
        console.log(this.state.items);
        
        return(
            <div className='allProducts'>
            <AdminNav/>
            {products}
            </div>
        )
    }
}
export default Inventory