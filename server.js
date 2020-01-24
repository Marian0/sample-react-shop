const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT ||  5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

if (process.env.NODE_ENV === 'production') {
  //use static middleware on production
  //it allows us to serve files inside the url
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, response) {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Error on server port " + port);
});

app.post('/payments', function(req, res) {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeResponse });
    }
  });
});