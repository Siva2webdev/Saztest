import express from "express";
const router = express.Router();
// import live_user_product_assignments from "../models/live_user_product_assignments.js";
import { liveuserproductassignmentsbyObId } from "../Controller/liveuserproductassignmentController.js";
import liveuserproductassignmentsdata from "../Controller/liveuserproductassignmentController.js";
import { addliveuserproductassignments } from "../Controller/liveuserproductassignmentController.js";
import { deleteliveuserproductassignments } from "../Controller/liveuserproductassignmentController.js";
import { liveuserproductassignmentsPatch } from "../Controller/liveuserproductassignmentController.js"
export default router;

router.get("/find",liveuserproductassignmentsdata);
router.get("/get/:_id",liveuserproductassignmentsbyObId);
router.post("/post",addliveuserproductassignments);
router.delete("/delete/:_id",deleteliveuserproductassignments);
router.patch("/patch/:_id",liveuserproductassignmentsPatch);



// router.get("/", async (req, res) => {
//   try {
//     const liveuserproductassignmentsdata = await live_user_product_assignments.find();
//     res.status(200).json(liveuserproductassignmentsdata);

//     // adminsdata.json();
//     console.log(liveuserproductassignmentsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
