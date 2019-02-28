import React, {Component} from 'react'
import axios from 'axios';
import './ProductDisplay.css'
import {updateCart} from '../ducks/reducer'
import {connect} from 'react-redux'
class ProductDisplay  extends Component {
    constructor(){
        super()
        this.state = {items:[]};
    }
    componentDidMount(){
        console.log(this.props)
        const {cat,type} = this.props
        console.log (cat, type)
        axios.get(`/api/products/?cat=${cat}&type=${type}`)
        .then(res => {
            console.log(res.data);
            
            this.setState({items:res.data})})
        .catch(err => {console.log(err)})
        console.log(this.state.items);
    }
    render(){
        let products = this.state.items.map(val=>{
            return(
                <div id='products'>
                    <img src={val.image_url} alt='product'/>
                    <h1>{val.product_name}</h1>
                    <h3>${val.price}</h3>
                    <button onClick={()=>{this.props.updateCart(val)}}>Add To Cart</button>
                </div>
            )
        })
        console.log(this.state.items);
        
        return(
            <div id='allProducts'>
            {products}
            </div>
        )
    }
}


export default connect (null,{updateCart})(ProductDisplay);