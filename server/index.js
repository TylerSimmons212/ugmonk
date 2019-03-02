const path = require('path'); // Usually moved to the start of file
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const sessions = require("express-session")
const ctrl = require('./controller')
const stripe = require("stripe")("sk_test_Bd3yFBhqJGc1VKF0aM4gGY3U");

const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET } = process.env;

const app = express();


app.use(express.json());
app.use(require("body-parser").text());

app.use( express.static( `${__dirname}/../build` ) );

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 3000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });
    
    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.use(sessions({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  maxAge: null
}));


massive(DB_CONNECTION).then(db => {
  app.set('db', db);
  app.listen(SERVER_PORT, () =>
  console.log(`Houston we have lift off on port ${SERVER_PORT}`)
  );
});

app.put('/api/products/:id', ctrl.updateInventory);
app.get('/api/products/', ctrl.getProducts)
app.get('/api/inventory', ctrl.getInventory)
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);
app.post('/api/submit', ctrl.submit);
app.get('/api/user', ctrl.getUser);
app.delete(`/api/delete/:id`, ctrl.delete);


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});