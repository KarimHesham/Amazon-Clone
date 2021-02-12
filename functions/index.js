/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
/* eslint-disable object-curly-spacing */
// eshint: jsversion:6
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IG1cIFrB6Yexwqm5McN2X3KH4FnzsB" +
    "kK9K8OoAHLnNOFLJ8woa6ssiRVMRtGFoIlm0QEffW7RFJhaXevVHiqTka008OF7Qs8w"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
