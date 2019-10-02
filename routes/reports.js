const express = require('express');
const request = require('superagent');
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

router.get('/test_reports', (req, res) => {
  res.send(`<h1>All Reports</h1>`);
});

router.get('/api/reports', function(req, res) {
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

router.get('/api/campaigns', function(req, res) {
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

module.exports = router;
