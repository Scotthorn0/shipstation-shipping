const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 4040;

const validateEndpoint = 'https://api.shipengine.com/v1/addresses/validate';
const ratesEndpoint = 'https://api.shipengine.com/v1/rates';
const createOptions = body => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'yYVDT2EV6TbotbU0edywDCGDJflriBu9C7OInaca81I',
  },
});

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.send();
});

app.post('/validate', ({ body }, res) => {
  fetch(validateEndpoint, createOptions(body))
    .then(results => results.json()).then((response) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Headers', '*');
      res.send(response[0].matched_address);
    }).catch((error) => {
      res.status(400);
      res.send(error);
    });
});

app.post('/rates', ({ body }, res) => {
  fetch(ratesEndpoint, createOptions(body))
    .then(results => results.json()).then((response) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Headers', '*');
      console.log({ response });
      res.send(response.rate_response.rates);
    });
});

app.listen(PORT, () => {
  console.log('listening:', PORT);
});
