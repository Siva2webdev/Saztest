import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
// import resellers from "../models/resellers.js"
import resellersdata from "../Controller/resellersController.js";
import { resellersbyObId } from "../Controller/resellersController.js";
import { addResellers, deleteresellers, resellersPatch } from "../Controller/resellersController.js";
export default router;

router.get("/find",resellersdata);
router.get("/:_id",resellersbyObId);
router.post("/post",addResellers);
router.delete("/delete/:_id",deleteresellers)
router.patch("/patch/:_id",resellersPatch);
// router.get("/", async (req, res) => {
//   try {
//     const resellersdata = await resellers.find();
//     res.status(200).json(resellersdata);

//     // adminsdata.json();
//     console.log(resellersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });