const express = require('express');
const request = require('superagent');
const router = express.Router();

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

router.get('/test_static', (req, res) => {
  res.send(`<h1>static</h1>`);
});

router.get('/api/report/1013b87690', function(req, res) {
  request
    .get(`${apiUrl}/reports/1013b87690`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

router.get('/api/campaign/1013b87690', function(req, res) {
  request
    .get(`${apiUrl}/campaigns/1013b87690`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

router.get('/api/report/f0d5bfdedf', function(req, res) {
  request
    .get(`${apiUrl}/reports/f0d5bfdedf`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

router.get('/api/campaign/f0d5bfdedf', function(req, res) {
  request
    .get(`${apiUrl}/campaigns/f0d5bfdedf`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

module.exports = router;
