import React, {Component} from 'react';
import Navbar from './All/Navbar';
import Email from './All/Email/Email';
import Footer from './All/Footer/Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAmount} from '../ducks/reducer'
import './Cart.css'
import CheckoutModule from './CheckoutModule';

class Cart extends Component{
constructor(){
    super()
    this.state={
        cart:[],
        module: false,
    };
}

handleAmountChange(amountChange, item){
    this.props.updateAmount(item.product_id, item.amount + amountChange)
}


toggleStripe = () => {
    return(
        this.setState({
            module: !this.state.module
        })
    )
}
render(){
    let products = this.props.cart.map(val=>{
        return(
            <div className='productsInCart'>
                <img src={val.image_url} alt='product'/>
                <h1>{val.product_name}</h1>
                <h3>${val.price}</h3>
                <h3 id='amount'>
                    <button id='inc' onClick={()=>{this.handleAmountChange(-1, val)}}>-</button>
                    {val.amount}
                    <button id='inc' onClick={()=>{this.handleAmountChange(1, val)}}>+</button>
                </h3>
                
                <button className='amount' onClick={this.toggleStripe}>CheckOut</button>
                <div>
                {this.state.module?<CheckoutModule toggle={this.toggleStripe}/>:<span></span>}
                </div>
            </div>
        )
    })
    // if (products){let display = products}
    // else {let display = (
    //     <h3>Forgot Something?</h3>
    //     <Link to='/shop'><button className='btn'>Start Shopping <i className="fas fa-long-arrow-alt-right"></i></button></Link>
    //     )}
    console.log(products)
    return(
        <div className='cart'>
            <Navbar/>
            <h1>Your Cart</h1>
            <div>
                { products[0] && products || <div>
                        <h3>Forgot Something?</h3>
                        <Link to='/shop'><button className='btn'>Start Shopping <i className="fas fa-long-arrow-alt-right"></i></button></Link></div>}
            </div>
            <Email/>
            <Footer/>
        </div>
    )
}
}
function mapStateToProps(state){
    return({
        shouldUpdate: state.shouldUpdate,
        cart: state.cart
    })
}
export default connect(mapStateToProps, {updateAmount})(Cart);