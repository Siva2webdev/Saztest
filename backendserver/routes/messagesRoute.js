import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import messages from "../models/messages.js";
import messagesdata from "../Controller/messagesController.js";
import { messagesbyObId } from "../Controller/messagesController.js";
import { addMessages } from "../Controller/messagesController.js";
import { deletemessages } from "../Controller/messagesController.js";
import { messagesPatch } from "../Controller/messagesController.js";
export default router;

router.get("/find",messagesdata);
router.get("/:_id",messagesbyObId);
router.post("/post",addMessages);
router.delete("/delete/:_id",deletemessages)
router.patch("/patch/:_id",messagesPatch);
router.get("/", async (req, res) => {
  try {
    const messagesdata = await messages.find();
    res.status(200).json(messagesdata);

    // adminsdata.json();
    console.log(messagesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});