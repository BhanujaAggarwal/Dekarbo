import * as functions from "firebase-functions";
//import * as cors from "cors";
import * as admin from "firebase-admin";

import * as sgMail from "@sendgrid/mail";
const axios = require("axios");

//const corsHandler = cors({ origin: true });
admin.initializeApp();
const db = admin.firestore();
const API_KEY = functions.config().sendgrid.key;

//Send confirmation email to verify user email

export const newShop = functions.firestore
  .document("ShopData/{shopId}")
  .onCreate(async (change, context) => {
    // Read the shop document
    const shopSnap = await db
      .collection("ShopData")
      .doc(context.params.shopId)
      .get();

    // Raw Data
    const shop = shopSnap.data();
    sgMail.setApiKey(API_KEY);
    // Email
    const msg = {
      to: shop.email,
      from: "service@dekarbo.de",
      templateId: "d-6701d95216334fa1bcb02582e5ab2c50",
      dynamic_template_data: {
        name: shop.name,
        link: `https://us-central1-purify-289711.cloudfunctions.net/verify/?id=${shopSnap.id}`
      }
    };

    return sgMail.send(msg);
  });

const getRecommendations = async (shop: any) => {
  const machines = {
    products: shop.products
  };
  try {
    const resp = await axios.post(
      "https://final-api-hamza.herokuapp.com/findresult",
      machines
    );
    sendEmail(shop, resp.data);
  } catch (err) {
    console.error(err);
  }
};

//Verification of user by clicking on url

exports.verify = functions.https.onRequest(async (req, res) => {
  var id = req.query.id;
  var url = "https://purify-289711.web.app/success";
  var shopRef = await db
    .collection("ShopData")
    .doc(`${id}`)
    .get();
  if (shopRef.exists) {
    console.log(shopRef.data().verified);
    if (shopRef.data().verified === true) {
      url = "https://purify-289711.web.app/verified";
    } else {
      await db
        .collection("ShopData")
        .doc(`${id}`)
        .update({ verified: true });
      getRecommendations(shopRef.data());
    }
  } else {
    console.log("No such document!");
  }
  res.redirect(url);
});

//Function to send email

export const sendEmail = (shop: any, result: any) => {
  // Raw Data
  var TEMPLATE_ID = "";
  var initiative: string[] = [];

  sgMail.setApiKey(API_KEY);
  if (shop.language === "de") {
    TEMPLATE_ID = "d-4551ffdc89524bd5a9d7a2b0b212a22d";
    initiative = [
      "Klimaschutzberatung",
      "Zuschuss für Einzelmaßnahme",
      "Energieeinsparungsprogram"
    ];
  } else {
    TEMPLATE_ID = "d-fdd7f68ebb784b70801d2cbce96ce21e";
    initiative = [
      "Climate consulting",
      "Grant for individual measures",
      "Energy saving program"
    ];
  }
  console.log(result.detailed_device_results.length);
  if (result.detailed_device_results.length < 2) {
    result.detailed_device_results.push({ name: "" });
    result.detailed_device_results.push({ name: "" });
  } else if (result.detailed_device_results.length < 3) {
    result.detailed_device_results.push({ name: "" });
  }
  // Email
  const euro_cons = (
    0.27 * result.overall_results_all_devices.total_energy_cons_all_devices
  ).toFixed(2);
  const savings = (
    0.2 *
    0.27 *
    result.overall_results_all_devices.total_savings_all_devices
  ).toFixed(2);
  const msg = {
    to: shop.email,
    from: "service@dekarbo.de",
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      name: shop.name,
      machine1: result.detailed_device_results[0].name,
      machine2: result.detailed_device_results[1].name,
      machine3: result.detailed_device_results[2].name,
      consumption_kwh:
        result.overall_results_all_devices.total_energy_cons_all_devices,
      consumption_euro: euro_cons,
      emissions_kg:
        result.overall_results_all_devices.total_emissions_all_devices,
      savings_euro: savings,
      name_program: initiative[result.initiative.initiative_number - 1]
    }
  };

  // Send it
  return sgMail.send(msg);
};
