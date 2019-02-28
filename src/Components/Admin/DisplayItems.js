import React, {Component} from 'react';
import axios from 'axios';
import './Admin.css'
import Item from './Item'
import EditItem from './EditItem'

class DisplayItems extends Component{
    constructor(){
        super()
        this.state={
            items:[],
            edit: false,
            image_url:'',
            product_name: '',
            price: 0,
            category: '',
            type: '',
            amount: 1,
        }
    }
    componentDidMount(){
        this.getItems()
    }

    getItems = () => {
        axios.get(`/api/inventory`)
        .then(res => {this.setState({items:res.data})})
        .catch(err => {console.log(err)})
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let {image_url, product_name, price, category, type, amount} = this.state
        axios.post('/api/submit', {image_url, product_name, price, category, type, amount})
        .then(res => {
            this.setState({
                edit: false,
            })
            this.getItems()
        })
        .catch(err => {console.log(err);})
    }

    addToInventory = () => {
        this.setState({
            edit: true
        })
    }

    render(){
        let products = this.state.items.map(val=>{
            return <Item key={val.product_id} item={val} getItems={this.getItems}/>
        })
        return(
            <div>
                <span className='icon'><i className="fas fa-plus" onClick={()=>{this.addToInventory()}}></i></span>
                {this.state.edit && <EditItem submit={this.handleSubmit} change={this.handleChange}/>}
                {products}                
            </div>
        )
    }
}
export default DisplayItems