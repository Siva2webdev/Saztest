import express from "express";
import usernotificationdata from "../Controller/usernotificationController.js";
import { usernotificationbyId } from "../Controller/usernotificationController.js";
import { addusernotification } from "../Controller/usernotificationController.js";
import { deleteusernotification } from "../Controller/usernotificationController.js";
import { usernotificationpatch } from "../Controller/usernotificationController.js";

const router = express.Router();
export default router;



router.get("/find",usernotificationdata);
router.get("/:_id",usernotificationbyId);
router.post("/post",addusernotification);
router.delete("/delete/:_id",deleteusernotification);
router.patch("/patch/:_id",usernotificationpatch);




// router.get("/", async (req, res) => {
//   try {
//     const user_notificationsdata = await user_notifications.find();
//     res.status(200).json(user_notificationsdata);

//     // adminsdata.json();
//     console.log(user_notificationsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
