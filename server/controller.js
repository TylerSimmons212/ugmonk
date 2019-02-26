const bcrypt = require('bcryptjs');
module.exports = {
    getProducts: async (req,res) => {
        const {cat,type} = req.query;
        const db = req.app.get('db')
        let products = await db.getProducts({category:cat, type:type});
        if (products.length===0){
            products=await db.getproducts2({category:cat, type:type});
        }
        res.status(200).send(products);
    },
    getInventory: async (req,res) => {
        const db = req.app.get('db')
        let items = await db.getInventory();
        console.log(items);
        res.status(200).send(items);
    },
    register: async (req,res) => {
        console.log(req.body)
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register({user: username, pass: hash});
        newUser = newUser[0];
        session.user = {...newUser};
        res.status(201).send(session.user);
    },
    login: async (req,res) => {
        const {username, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let user = await db.login({user:username});
        user = user[0];
        if (!user) {
            return res.sendStatus(418);
        }
        const foundUser = bcrypt.compareSync(password, user.password);
        if (foundUser) {
            delete user.password
            session.user = user;
            res.status(200).send(session.user);
        } else {
            res.status(401).send('Access Denied')
        } 
    },
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req,res)=> {
        const {user} = req.session;
        if (user) {
            res.status(200).send(user)
        } else {
            res.sendStatus(401);
        }
    }
}