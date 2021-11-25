const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

const auth = {
  username: "asangwan8998@gmail.com",
  password: "Zendesk@123",
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
  console.log(tickets);
  res.send(tickets);
});

app.listen(8080, function () {
  console.log("app listening on port 3000!");
});
