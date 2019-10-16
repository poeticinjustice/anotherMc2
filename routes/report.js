const express = require('express');
const request = require('superagent');
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

require('dotenv').config();

const apiUrl = process.env.MC_API_URL;
const apiToken = process.env.MC_ACCESS_TOKEN;

router.get(`/api/report/:id`, function(req, res) {
  request
    .get(`${apiUrl}/reports/${req.params.id}`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(`${apiUrl}/reports/${req.params.id}`);
      }
      res.send(_res.body);
    });
});

router.get(`/api/campaign/:id`, function(req, res) {
  request
    .get(`${apiUrl}/campaigns/${req.params.id}`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(`${apiUrl}/campaigns/${req.params.id}`);
      }
      res.send(_res.body);
    });
});

router.get(`/api/clicked/:id`, function(req, res) {
  request
    .get(`${apiUrl}/reports/${req.params.id}/click-details?offset=0&count=1000`)
    .auth('anystring', apiToken, { type: 'auto' })
    .end((err, _res) => {
      if (err) {
        return console.log(`${apiUrl}/reports/${req.params.id}/click-details`);
      }
      res.send(_res.body);
    });
});

module.exports = router;
