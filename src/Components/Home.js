import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import data from '../assets/data'
import DisplayBox from '../Components/DisplayBox'
import Footer from './All/Footer/Footer'
import './Home.css'
import Navbar from './All/Navbar';
import Email from './All/Email/Email';
import CarouselDemo from './Carousel';
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
                <div className='carousel-view'>
                    <CarouselDemo/>
                </div>
                <DisplayBox/>
                <Email/>
                <Footer/>
            </div>
        )
    }
}
export default Home;