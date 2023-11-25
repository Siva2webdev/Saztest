import express from "express";
import { NewusermessagesIdPatch, addNewusermessages, deleteNewusermessages, getNewusermessages, getNewusermessagesbyObId, } from "../Controller/MasaNewUserMessagesController.js";

const router = express.Router();

export default router;

router.post("/post", addNewusermessages)
router.get("/get",getNewusermessages)
router.get("/get/:_id",getNewusermessagesbyObId)
router.delete("/delete/:_id",deleteNewusermessages)
router.patch("/patch/:_id",NewusermessagesIdPatch);