import express from "express";
const router = express.Router();
// import billing_categories from "../models/billing_categories.js";
import { billingPatch, billingbyObId } from "../Controller/billingController.js";
import billingdata from "../Controller/billingController.js";
import { addbilling } from "../Controller/billingController.js";
import { deletebilling } from "../Controller/billingController.js";
export default router;

router.get("/find",billingdata);
router.get("/:_id",billingbyObId)
router.post("/post",addbilling)
router.delete("/delete/:_id",deletebilling)
router.patch("/patch/:_id",billingPatch);

// router.get("/", async (req, res) => {
//   try {
//     const billingdata = await billing_categories.find();
//     res.status(200).json(billingdata);

//     // adminsdata.json();
//     console.log(billingdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
