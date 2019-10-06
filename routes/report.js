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

module.exports = router;
