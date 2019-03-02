import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this)
    }
    componentDidMount() {
        const { id } = this.props;
        if (id) {
            // boot to other page
            this.props.history.push('/private');
        } else {
            // double check sessions
            axios.get('/api/user')
                .then(res => {
                    // boot to the other page
                    this.props.updateUser(res.data);
                    this.props.history.push('/private')
                })
                .catch(err => {
                    // don't move
                })
        }
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }
    register = () => {
        console.log('clicked')
        const { username, password } = this.state
        axios.post('/auth/register', { username, password })
            .then(res => { this.props.updateUser(res.data); this.props.history.push('/') })
            .catch(err => { console.log(err) })
    }
    login() {
        const { username, password } = this.state
        axios.post('/auth/login', { username, password })
            // .then(res => {
                //     this.props.updateUser(res.data);this.props.history.push('/')})
                .then(res => {
                        console.log(res.data)
                if (res.data.admin !== null) {
                    this.props.updateUser(res.data); this.props.history.push('/admin')
                }
                else { this.props.updateUser(res.data); this.props.history.push('/') }
            })
            .catch(err => { console.log(err) })
    }
    render() {
        const { username, password } = this.state;
        return (
            <div className='Login'>
                <input type='username' value={username} onChange={e => this.handleChange('username', e.target.value)} placeholder='Username' />
                <input type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} placeholder='Password' />
                <div className='login-buttons'>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}
// State(Data)
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
};
// Methods(Actions)
const mapDispatchToProps = {
    updateUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);