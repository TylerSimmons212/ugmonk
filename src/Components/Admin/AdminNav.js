import React from 'react';
import {Link} from 'react-router-dom';
import '../All/Navbar.css'
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser} from '../../ducks/reducer';
import {withRouter} from 'react-router-dom';
import './Admin.css'
function AdminNav (props){
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
                |
                {name?(<button className='ugmonk' onClick={logout}>Logout</button>):(<Link to='/login'><button className='ugmonk'>Login</button></Link>)}
            </div>
            <div className='dropdown'>
                <h1 className='bars'><i class="fas fa-bars"></i></h1>
                <div className='dropdown-content text-color'>
                    <Link to='/admin' style={{textDecoration:'none'}} id='title'><h1>UGMONK</h1></Link>
                    <Link to='/inventory' className='bar bars-mini'><button>Inventory</button></Link>
                    <Link to='/posts' className='bar bars-mini'><button>Posts</button></Link>
                    <Link to='/orders' className='bar bars-mini'><button>Orders</button></Link>`
                </div>
            </div>
            <div className='main-nav text-color'>
                <Link to='/admin' style={{textDecoration:'none'}} id='title'><h1>UGMONK</h1></Link>
                <Link to='/inventory' className='bar bars-mini'><button>Inventory</button></Link>
                <Link to='/posts' className='bar bars-mini'><button>Posts</button></Link>
                <Link to='/orders' className='bar bars-mini'><button>Orders</button></Link>
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
const NavbarWithRouter = withRouter(AdminNav)
export default connect(mapToProps, dispatch)(NavbarWithRouter)