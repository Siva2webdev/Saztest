import express from "express";
const router = express.Router();
// import live_user_profiles from "../models/live_user_profiles.js";
import { liveuserprofilesbyObId } from "../Controller/liveuserprofilesController.js";
import liveuserprofilesdata from "../Controller/liveuserprofilesController.js";
import { addliveuserprofiles } from "../Controller/liveuserprofilesController.js";
import { deleteliveuserprofiles } from "../Controller/liveuserprofilesController.js";
import { liveuserprofilesPatch } from "../Controller/liveuserprofilesController.js"
export default router;

router.get("/find",liveuserprofilesdata);
router.get("/get/:_id",liveuserprofilesbyObId);
router.post("/post",addliveuserprofiles);
router.delete("/delete/:_id",deleteliveuserprofiles);
router.patch("/patch/:_id",liveuserprofilesPatch);





// router.get("/", async (req, res) => {
//   try {
//     const liveuserprofilesdata = await live_user_profiles.find();
//     res.status(200).json(liveuserprofilesdata);

//     // adminsdata.json();
//     console.log(liveuserprofilesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
