import express from "express";
const router = express.Router();
import billingtypesdata, { billingtypesPatch } from "../Controller/billingtypesController.js";
import { billingtypesbyObId } from "../Controller/billingtypesController.js";
import { addbillingtypes } from "../Controller/billingtypesController.js";
import { deletebillingtypes } from "../Controller/billingtypesController.js";
export default router;

router.get("/find",billingtypesdata);
router.get("/:_id",billingtypesbyObId)
router.post("/post",addbillingtypes)
router.delete("/delete/:_id",deletebillingtypes)
router.patch("/patch/:_id",billingtypesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const billingtypesdata = await billingtypes_categories.find();
//     res.status(200).json(billingtypesdata);

//     // adminsdata.json();
//     console.log(billingtypesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
