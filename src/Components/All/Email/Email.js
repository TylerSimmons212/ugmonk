import React, {Component} from 'react';
import './Email.css'
class Email extends Component{
    constructor(){
        super()
        this.state = {
            input:''
        }
    }
    render(){
        return(
            <div className='outer'>
                <div className='inner'>
                <h1 className='title'>Get Journal Updates</h1>
                <h3 className='info'>Sign up to get weekly emails with inspiration and special content straight from Ugmonk's founder.</h3>
                <input className='input' placeholder='Enter Email'></input>
                <button className='btn'>Subscribe <i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </div>
        )
    }
}
export default Email;