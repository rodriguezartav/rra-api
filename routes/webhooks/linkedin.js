var express = require("express");
var router = express.Router();
const Knex = require("../../helpers/knex");
const moment = require("moment");
const superagent = require("superagent");
const Slack = require("../../helpers/slack");
const querystring = require("querystring");
const knex = Knex();

router.get("/", async function (req, res, next) {
  const url = "https://www.linkedin.com/oauth/v2/authorization";
  const query = querystring.encode({
    response_type: "code",
    client_id: process.env.LINKEDIN_CLIENT_ID,
    redirect_uri: process.env.LINKEDIN_URI,
    state: "",
    scope: "r_liteprofile r_emailaddress w_member_social",
  });

  return res.redirect(`${url}?${query}`);
});

router.post("/", async function (req, res, next) {
  const { code, state } = req.body;

  const auth_token_response = await superagent
    .get("https://www.linkedin.com/oauth/v2/accessToken")
    .send({
      response_type: "authorization_code",
      client_id: process.env.LINKEDIN_CLIENT_ID,
      redirect_uri: process.env.LINKEDIN_URI,
      client_secret: process.env.client_secret,
      code: code,
    });

  const { access_token, expires_in } = auth_token_response.body;

  return res.json({});
});

module.exports = router;
