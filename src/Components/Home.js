import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import data from '../assets/data'
import DisplayBox from '../Components/DisplayBox'
import Footer from './All/Footer/Footer'
import './Home.css'
import Navbar from './All/Navbar';
import Email from './All/Email/Email';
class Home  extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            bestSellers: [],
            emailInput: ''
        }
    }
    render() {
        // console.log(data);
        // let displayBox = data.map((val, i)=>{
        //     return(
        //         <DisplayBox key={i} title={val.title} description={val.description} image={val.image} color={val.color}/>
        //     )
        // })
        return(
            <div>
                <Navbar/>
                    <Link to='/shop/clothing-hats'>
                        <picture>
                            <source srcSet="https://ugmonk.com/wp-content/uploads/2018/12/beanie-large2.jpg" media="(min-width: 769px)"></source>
                            <source srcSet="https://ugmonk.com/wp-content/uploads/2018/12/beanie-med.jpg" media="(min-width: 481px)"></source>
                            <img srcSet="https://ugmonk.com/wp-content/uploads/2018/12/beanie-sml.jpg" alt="New Chunky Knit Ugmonk Beanies"></img>
                        </picture>
                    </Link>


                {/* {displayBox} */}
                <DisplayBox/>

                
                <div className='workspace'></div>
                <div className='everyday'></div>
                <div className='prints'></div>
                <Email/>
                <Footer/>
            </div>
        )
    }
}
export default Home;