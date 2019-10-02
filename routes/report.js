const express = require('express');
const request = require('superagent');
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

router.get('/test_rep', (req, res) => {
  res.send(`<h1>Single Report</h1>`);
});

router.get('/api/specific', function(req, res) {
  request
    .get(`${apiUrl}/reports/042530cdf3`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

router.get('/api/clicks', function(req, res) {
  request
    .get(`${apiUrl}/reports/042530cdf3/click-details`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(err);
      }
      res.send(_res.body);
    });
});

module.exports = router;
