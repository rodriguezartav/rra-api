var express = require("express");
var router = express.Router();
const Knex = require("../../helpers/knex");
const moment = require("moment");
const superagent = require("superagent");
const Slack = require("../../helpers/slack");
const FinHub = require("../../helpers/finhub");
const Alpaca = require("../../helpers/alpaca");

const knex = Knex();

router.get("/", async function (req, res) {
  const classes = await knex.table("classes").select();

  return res.send(stocks);
});

module.exports = router;
