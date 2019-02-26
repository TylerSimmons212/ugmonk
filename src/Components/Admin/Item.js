import React, { Component } from 'react'
import Axios from 'axios';

class Item extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            product_name: '',
            price: '',
            category: '',
            type: '',
            amount: 0,
            image_url: ''
        }
    }

    toggleEdit(){
        if(this.state.edit === true){this.setState({edit:false})}
        else{this.setState({edit:true})}
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        Axios.put('/api/products', this.state).then(response => {
            
        })
    }

    render() {
        return (
            !this.state.edit ?
                <div className='items'>
                    <p>ImageURL: {this.props.item.image_url}</p>
                    <div className='items-info'>
                        <h1><span className='strong'>Name</span>: {this.props.item.product_name}</h1>
                        <h3><span className='strong'>Price</span>: ${this.props.item.price}</h3>
                        <h3><span className='strong'>Category</span>: {this.props.item.category}</h3>
                        <h3><span className='strong'>Type</span>: {this.props.item.type}</h3>
                        <h3><span className='strong'>Amount</span>: {this.props.item.amount}</h3>
                        <span className='icon'><i class="far fa-edit" onClick={()=>{this.toggleEdit()}}></i></span>

                    </div>
                </div>
            :
                <div className='items'>
                    <p>ImageURL: <input name='image_url' onChange={this.handleChange} placeholder={this.props.item.image_url}></input></p>
                    <div className='items-info'>
                        <h1><span className='strong'>Name</span>: <input name='product_name' onChange={this.handleChange} placeholder={this.props.item.product_name}></input></h1>
                        <h3><span className='strong'>Price</span>: <input name='price' onChange={this.handleChange} placeholder={this.props.item.price}></input></h3>
                        <h3><span className='strong'>Category</span>: <input name='category' onChange={this.handleChange} placeholder={this.props.item.category}></input></h3>
                        <h3><span className='strong'>Type</span>: <input name='type' onChange={this.handleChange} placeholder={this.props.item.type}></input></h3>
                        <h3><span className='strong'>Amount</span>: <input name='amount' onChange={this.handleChange} placeholder={this.props.item.amount}></input></h3>
                        <div className='icon done'><i class="far fa-check-circle"></i></div>                        
                        <div className='icon done'><i class="fas fa-trash-alt"></i></div>
                    </div>
                </div>
        )
    }
}

export default Item