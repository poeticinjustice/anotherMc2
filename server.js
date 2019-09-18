const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

app.get('/', function(req, res) {
  request
    .get(`${apiUrl}`)
    .auth('anystring', apiToken)
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

app.get('/api', function(req, res) {
  request
    .get(`${apiUrl}`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

app.get('/api/reports', function(req, res) {
  request
    .get(`${apiUrl}/reports`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

app.get('/api/campaigns', function(req, res) {
  request
    .get(`${apiUrl}/campaigns/`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

app.get('/api/specific', function(req, res) {
  request
    .get(`${apiUrl}/reports/`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

app.get('/test', (req, res) => {
  res.send(`<h1> Server is running on port ${PORT}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
