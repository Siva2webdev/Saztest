import express from "express";
const router = express.Router();
// import packages_categories from "../models/packages_categories.js";
import { packagesPatch, packagesbyObId } from "../Controller/packagesController.js";
import packagesdata from "../Controller/packagesController.js";
import { addpackages } from "../Controller/packagesController.js";
import { deletepackages } from "../Controller/packagesController.js";
// import { Patchpackages }  from "../Controller/packagesController.js";
export default router;

router.get("/find",packagesdata);
router.get("/:_id",packagesbyObId)
router.post("/post",addpackages)
router.delete("/delete/:_id",deletepackages)
router.patch("/patch/:_id",packagesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const packagesdata = await packages_categories.find();
//     res.status(200).json(packagesdata);

//     // adminsdata.json();
//     console.log(packagesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
