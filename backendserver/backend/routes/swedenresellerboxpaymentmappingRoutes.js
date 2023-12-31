import express from "express";
const router = express.Router();
import { swedenresellerboxpaymentmappingsbyObId } 
from "../Controller/swedenresellerboxpaymentmappingsController.js";
import swedenresellerboxpaymentmappingsdata 
from "../Controller/swedenresellerboxpaymentmappingsController.js";
import { addswedenresellerboxpaymentmappings } 
from "../Controller/swedenresellerboxpaymentmappingsController.js";
import { deleteswedenresellerboxpaymentmappings } 
from "../Controller/swedenresellerboxpaymentmappingsController.js";
import { swedenresellerboxpaymentmappingsPatch } 
from "../Controller/swedenresellerboxpaymentmappingsController.js";
export default router;

router.get("/find",swedenresellerboxpaymentmappingsdata);
router.get("/get/:_id",swedenresellerboxpaymentmappingsbyObId);
router.post("/post",addswedenresellerboxpaymentmappings);
router.delete("/delete/:_id",deleteswedenresellerboxpaymentmappings);
router.patch("/patch/:_id",swedenresellerboxpaymentmappingsPatch);




// router.get("/", async (req, res) => {
//   try {
//     const swedenresellerboxpaymentmappingdata = await sweden_reseller_box_payment_mapping.find();
//     res.status(200).json(swedenresellerboxpaymentmappingdata);

//     // adminsdata.json();
//     console.log(swedenresellerboxpaymentmappingdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
