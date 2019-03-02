import React from 'react';
import CheckoutForm from './CheckoutForm';
import './pop-up.css'
import {StripeProvider, Elements} from 'react-stripe-elements'; 

// import {
//     CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   PostalCodeElement,
//   PaymentRequestButtonElement,
//   IbanElement,
//   IdealBankElement,
//   StripeProvider,
//   Elements,
//   injectStripe,
// } from 'react-stripe-elements';

const CheckoutModule = (props) => {
    return(
        <div className='all-window'>
            <div className='pop-up'>
                <StripeProvider apiKey="pk_test_0f3rTmUKB6IRavcAXMcwEQSR">
                    <div className="example">
                    <h1>CheckOut</h1>
                    <Elements>
                        <CheckoutForm/>
                    </Elements>
                    <button onClick={props.toggle}>Return</button>
                    </div>
                </StripeProvider>
            </div>
        </div>
    )
}

export default CheckoutModule;


// const handleBlur = () => {
//     console.log('[blur]');
//   };
//   const handleChange = (change) => {
//     console.log('[change]', change);
//   };
//   const handleClick = () => {
//     console.log('[click]');
//   };
//   const handleFocus = () => {
//     console.log('[focus]');
//   };
//   const handleReady = () => {
//     console.log('[ready]');
//   };
  
//   const createOptions = (fontSize, padding) => {
//     return {
//       style: {
//         base: {
//           fontSize,
//           color: '#424770',
//           letterSpacing: '0.025em',
//           fontFamily: 'Source Code Pro, monospace',
//           '::placeholder': {
//             color: '#aab7c4',
//           },
//           padding,
//         },
//         invalid: {
//           color: '#9e2146',
//         },
//       },
//     };
//   };
  
// class _PaymentRequestForm extends React.Component {
//     constructor(props) {
//       super(props);
  
//       const paymentRequest = props.stripe.paymentRequest({
//         country: 'US',
//         currency: 'usd',
//         total: {
//           label: 'Demo total',
//           amount: 1000,
//         },
//       });
  
//       paymentRequest.on('token', ({complete, token, ...data}) => {
//         console.log('Received Stripe token: ', token);
//         console.log('Received customer information: ', data);
//         complete('success');
//       });
  
//       paymentRequest.canMakePayment().then((result) => {
//         this.setState({canMakePayment: !!result});
//       });
  
//       this.state = {
//         canMakePayment: false,
//         paymentRequest,
//       };
//     }
  
//     render() {
//       return this.state.canMakePayment ? (
//         <PaymentRequestButtonElement
//           className="PaymentRequestButton"
//           onBlur={handleBlur}
//           onClick={handleClick}
//           onFocus={handleFocus}
//           onReady={handleReady}
//           paymentRequest={this.state.paymentRequest}
//           style={{
//             paymentRequestButton: {
//               theme: 'dark',
//               height: '64px',
//               type: 'donate',
//             },
//           }}
//         />
//       ) : null;
//     }
//   }
//   const PaymentRequestForm = injectStripe(_PaymentRequestForm);
//   export default PaymentRequestForm;
  