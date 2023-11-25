import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { multiverappupdatesPatch, multiverappupdatesbyObId } from "../Controller/multiverappupdatesController.js";
import multiverappupdatesdata from "../Controller/multiverappupdatesController.js";
import { addmultiverappupdates } from "../Controller/multiverappupdatesController.js";
import { deletemultiverappupdates } from "../Controller/multiverappupdatesController.js";
export default router;

router.get("/find",multiverappupdatesdata);
router.get("/:_id",multiverappupdatesbyObId)
router.post("/post",addmultiverappupdates)
router.delete("/delete/:_id",deletemultiverappupdates)
router.patch("/patch/:_id",multiverappupdatesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const multiverappupdatesdata = await catchup_programs.find();
//     res.status(200).json(multiverappupdatesdata);

//     // adminsdata.json();
//     console.log(multiverappupdatesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
