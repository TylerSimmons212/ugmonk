import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './pop-up.css'
class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return(<h1>Purchase Complete</h1>);
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement className='stripe-inputs'/>
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}


export default injectStripe(CheckoutForm);
