import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';
import '../All/Navbar.css';
import Navbar from '../All/Navbar';

class Private extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        const {id} = this.props;
        if(!id){
            // double check sessions
            axios.get('/api/user')
            .then(res => {
                // dont move
                // add to redux
                this.props.updateUser(res.data);

            })
            .catch(err => {
                // boot to the other page
                this.props.history.push('/')
            })
        } else {
            // don't move
        }
    }
    render() {
        const {name} = this.props;

        return (
            <div className='Private'>
            <Navbar name={name} logout={this.logout}/>
            </div>
        )
    }
}

const mapToProps = reduxState => {
    const {name} = reduxState;
    return {
        name
    };
};
const dispatch = {
    updateUser
}
export default connect(mapToProps, dispatch)(Private);