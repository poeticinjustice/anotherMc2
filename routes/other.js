const express = require('express');
const request = require('superagent');
const router = express.Router();

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

router.get('/test_other', (req, res) => {
  res.send(`<h1>Other</h1>`);
});

router.get('/', function(req, res) {
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

router.get('/:reportId', function(req, res) {
  request
    .get(`${apiUrl}/reports/:reportId`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

module.exports = router;
