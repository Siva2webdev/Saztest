import express from "express";
const router = express.Router();
// import shahid_new_user_profiles from "../models/shahidnewusers.js";
export default router;
import shahidnewuserprofiles, { Shahidnewuser } from "../Controller/shahidnewuserprofilesController.js";
import  { shahidnewuserprofilesbyId } from "../Controller/shahidnewuserprofilesController.js";
import { addshahidnewuserprofiles} from "../Controller/shahidnewuserprofilesController.js";
import { deleteshahidnewuserprofiles } from "../Controller/shahidnewuserprofilesController.js";
// router.get("/", async (req, res) => {
//   try {
//     const shahidnewuserprofiles = await shahid_new_user_profiles.find();
//     res.status(200).json(shahidnewuserprofiles);

//     // adminsdata.json();
//     console.log(shahidnewuserprofiles);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidnewuserprofiles);
router.get("/:_id",shahidnewuserprofilesbyId);
router.post("/post",addshahidnewuserprofiles);
router.delete("/delete/:_id",deleteshahidnewuserprofiles);
router.patch("/patch/:_id",Shahidnewuser);