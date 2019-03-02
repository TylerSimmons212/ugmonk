import React, {Component} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';
import {withRouter} from 'react-router-dom';

class Dropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggleView: false,
        }
    }
    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            this.props.updateUser({name:'', user_id:0})
            this.props.history.push('/')
        })
        .catch(err => {console.log(err)})
    }
    dropdown = () => {
        this.setState({toggleView:!this.state.toggleView})
    }
    dropdownContent(){
        const {name} = this.props
        return(
            <div className='dropdown-content-nav'>
                    <div id='top-nav-dropdown'>
                        {name && name}
                        {name?(<button className='ugmonk' onClick={this.logout}>Logout</button>):(<Link to='/login'><button className='ugmonk'>Login</button></Link>)}
                        {name?<Link to='/cart'><div className='cart-logo-res'><i className="fas fa-shopping-cart"></i></div></Link>:<Link to='/login'><div className='cart-logo ugmonk'><i className="fas fa-shopping-cart"></i></div></Link>}
                    </div>
                <div  className='dropdown-content-main-nav'>
                    <button onClick={this.toggleMini}>Shop</button>
                    <Link to='/blog'><button>Journal</button></Link>
                    <Link to='/about'><button>About</button></Link>
                </div>
            </div>
        )
    }
    render(){
        console.log(this.state.toggleView);
        
        return(
            <div>
                {this.state.toggleView?this.dropdownContent():
                <h1 className='bars' onClick={this.dropdown}><i className="fas fa-bars"></i></h1>
                }
            </div>
        )
    }
}
// export default Dropdown
const mapToProps = reduxState => {
    const {name} = reduxState;
    return {name: name};
};
const dispatch = {updateUser};
const NavbarWithRouter = withRouter(Dropdown)
export default connect(mapToProps, dispatch)(NavbarWithRouter)