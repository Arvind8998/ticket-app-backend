const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());

const auth = {
  username: process.env.ACCOUNT_USERNAME,
  password: process.env.ACCOUNT_PASSWORD,
};

const getTickets = async () => {
  const data = await axios.get(
    "https://zcctapticket.zendesk.com//api/v2/tickets.json",
    { auth }
  );
  return data?.data.tickets;
};

app.get("/get-tickets", async function (req, res) {
  const tickets = await getTickets();
  res.send(tickets);
});

app.listen(8080, function () {
  console.log("app listening on port 3000!");
});
