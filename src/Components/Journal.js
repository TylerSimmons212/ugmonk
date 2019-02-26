import React, {Component} from 'react';
import Footer from './All/Footer/Footer'
import Navbar from './All/Navbar'
import Email from './All/Email/Email'
class Journal  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            emailInput: ''
        }
    }
    render() {
        return(
            <div>
                <Navbar/>
                <Email/>
                <Footer/>
            </div>
        )
    }
}
export default Journal;