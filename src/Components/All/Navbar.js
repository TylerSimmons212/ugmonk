import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser} from '../../ducks/reducer';
import {withRouter} from 'react-router-dom';
function Navbar (props){
    const {name} = props
    const logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            props.updateUser({name:'', user_id:0})
            props.history.push('/')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
    <div>
        <nav>
            <div className='top-nav'>
                {name && name}
                <Link to='/FAQ' className='ugmonk'><button>Help</button></Link>
                |
                {name?(<button className='ugmonk' onClick={logout}>Logout</button>):(<Link to='/login'><button className='ugmonk'>Login</button></Link>)}
                |
                {name?<Link to='/cart'><div className='cart-logo ugmonk'><i className="fas fa-shopping-cart"></i></div></Link>:<Link to='/login'><div className='cart-logo ugmonk'><i className="fas fa-shopping-cart"></i></div></Link>}
            </div>
            <div className='dropdown'>
                <h1 className='bars'><i class="fas fa-bars"></i></h1>
                <div className='dropdown-content'>
    `               <Link to='/' style={{textDecoration:'none'}} className='ugmonk'><h1>UGMONK</h1></Link>
                    <Link to='/shop' className='bar bars-mini'><button>Shop</button></Link>
                    <Link to='/blog' className='bar bars-mini'><button>Journal</button></Link>
                    <Link to='/about' className='bar bars-mini'><button>About</button></Link>`
                </div>
            </div>
            <div className='main-nav'>
                <Link to='/' style={{textDecoration:'none'}} className='ugmonk'><h1>UGMONK</h1></Link>
                <Link to='/shop' className='bar bars-mini'><button>Shop</button></Link>
                <Link to='/blog' className='bar bars-mini'><button>Journal</button></Link>
                <Link to='/about' className='bar bars-mini'><button>About</button></Link>
            </div>
        </nav>
    </div>
)}
const mapToProps = reduxState => {
    const {name} = reduxState;
    return {
        name
    };
};
const dispatch = {
    updateUser
};
const NavbarWithRouter = withRouter(Navbar)
export default connect(mapToProps, dispatch)(NavbarWithRouter)