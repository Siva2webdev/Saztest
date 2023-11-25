import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { multiuserprofilesPatch, multiuserprofilesbyObId } from "../Controller/multiuserprofilesController.js";
import multiuserprofilesdata from "../Controller/multiuserprofilesController.js";
import { addmultiuserprofiles } from "../Controller/multiuserprofilesController.js";
import { deletemultiuserprofiles } from "../Controller/multiuserprofilesController.js";
export default router;

router.get("/find",multiuserprofilesdata);
router.get("/:_id",multiuserprofilesbyObId)
router.post("/post",addmultiuserprofiles)
router.delete("/delete/:_id",deletemultiuserprofiles)
router.patch("/patch/:_id",multiuserprofilesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const multiuserprofilesdata = await catchup_programs.find();
//     res.status(200).json(multiuserprofilesdata);

//     // adminsdata.json();
//     console.log(multiuserprofilesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
