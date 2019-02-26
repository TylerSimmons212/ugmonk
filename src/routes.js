import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Shop from './Components/Shop/Shop';
import Journal from './Components/Journal';
import Help from './Components/Help';
import Login from './Components/Auth/Login';
import Cart from './Components/Cart';
import About from './Components/About/About'
import Workspace from './Components/Shop/Workspace/Workspace';
import Clothing from './Components/Shop/Clothing/Clothing';
import Prints from './Components/Shop/Prints';
import Everyday from './Components/Shop/Everyday/Everyday';
import Tees from './Components/Shop/Clothing/Tees';
import Hoodies from './Components/Shop/Clothing/Hoodies';
import Hats from './Components/Shop/Clothing/Hats';
import Kids from './Components/Shop/Clothing/Kids';
import Bags from './Components/Shop/Everyday/Bags';
import Wallets from './Components/Shop/Everyday/Wallets';
import Mousepads from './Components/Shop/Workspace/Mousepads';
import Accessories from './Components/Shop/Workspace/Accessories';
import Sketchbooks from './Components/Shop/Workspace/Sketchbooks';
import Private from './Components/Private/Private';
import Admin from './Components/Admin/Admin'
import Inventory from './Components/Admin/Inventory'
import Orders from './Components/Admin/Orders'
import Posts from './Components/Admin/Posts'

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/blog' component={Journal}/>
        <Route exact path='/FAQ' component={Help}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/shop/workspace' component={Workspace}/>
        <Route exact path='/shop/clothing-all' component={Clothing}/>
        <Route exact path='/shop/prints' component={Prints}/>
        <Route exact path='/shop/everyday-carry' component={Everyday}/>
        <Route exact path='/shop/clothing-tees' component={Tees}/>
        <Route exact path='/shop/clothing-hoodies' component={Hoodies}/>
        <Route exact path='/shop/clothing-hats' component={Hats}/>
        <Route exact path='/shop/clothing-kids' component={Kids}/>
        <Route exact path='/shop/bags' component={Bags}/>
        <Route exact path='/shop/wallets' component={Wallets}/>
        <Route exact path='/shop/mousepads' component={Mousepads}/>
        <Route exact path='/shop/accessories' component={Accessories}/>
        <Route exact path='/shop/sketchbooks' component={Sketchbooks}/>
        <Route exact path='/private' component={Private}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/inventory' component={Inventory}/>
        <Route exact path='/orders' component={Orders}/>
        <Route exact path='/posts' component={Posts}/>
    </Switch>
)