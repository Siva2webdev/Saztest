import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { newuserprofilesPatch, newuserprofilesbyObId } from "../Controller/newuserprofilesController.js";
import newuserprofilesdata from "../Controller/newuserprofilesController.js";
import { addnewuserprofiles } from "../Controller/newuserprofilesController.js";
import { deletenewuserprofiles } from "../Controller/newuserprofilesController.js";
export default router;

router.get("/find",newuserprofilesdata);
router.get("/:_id",newuserprofilesbyObId)
router.post("/post",addnewuserprofiles)
router.delete("/delete/:_id",deletenewuserprofiles)
router.patch("/patch/:_id",newuserprofilesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const newuserprofilesdata = await catchup_programs.find();
//     res.status(200).json(newuserprofilesdata);

//     // adminsdata.json();
//     console.log(newuserprofilesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
