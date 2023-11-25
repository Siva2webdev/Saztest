import express from "express";
const router = express.Router();
// import shahid_new_user_messages from "../models/shahid_new_user_messages.js";
// import shahid_new_user_messages from "../models/shahid_new_user_messages.js";
import shahidnewusermessagesdata, { Shahidnew, deletedshahidnewusermessages } from "../Controller/shahidnewusermessagesController.js";
import { shahidnewusermessagesdatabyId } from "../Controller/shahidnewusermessagesController.js";
// import dashboardcategoriesdata from "../Controller/dashboardcategoriesController.js";
import { addshahidusermessages } from "../Controller/shahidnewusermessagesController.js";
 
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const shahidnewusermessages = await shahid_new_user_messages.find();
//     res.status(200).json(shahidnewusermessages);

//     // adminsdata.json();
//     console.log(shahidnewusermessages);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidnewusermessagesdata);
router.get("/:_id",shahidnewusermessagesdatabyId);
router.post("/post",addshahidusermessages);
router.delete("/delete/:_id",deletedshahidnewusermessages);
router.patch("/patch/:_id",Shahidnew);