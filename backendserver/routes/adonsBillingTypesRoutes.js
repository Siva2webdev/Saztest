import express from "express";
const router = express.Router();
import adons_billing_types from "../models/adons_billing_types.js";
export default router;
router.get("/", async (req, res) => {
  try {
    const adonsdata = await adons_billing_types.find();
    res.status(200).json(adonsdata);

    // adminsdata.json();
    console.log(adonsdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});
