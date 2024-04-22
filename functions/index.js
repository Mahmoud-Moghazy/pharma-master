// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();

// app.use(cors({ origin: true }));
// app.use(express.json());

// // api

// app.get("/", (req, res) => res.status(200).send("Hello world"));
// app.post("/checkout/create", async (req, res) => {
//   const totalAmount = req.query.totalAmount;
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: totalAmount,
//     currency: "EGB",
//   });
//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });
// // example endpoint

// exports.api = functions.https.onRequest(app);
