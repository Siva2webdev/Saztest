import express from "express";
import Livetvaudiosdatas from "../Controller/livetvaudioController.js";
import { LivetvaudiosbyId } from "../Controller/livetvaudioController.js";
import { addLivetvaudios } from "../Controller/livetvaudioController.js";
import { deletelivetvaudios } from "../Controller/livetvaudioController.js";
import { LivetvaduioPatch } from "../Controller/livetvaudioController.js";

const router = express.Router();

export default router;


router.get("/find",Livetvaudiosdatas);
router.get("/:_id",LivetvaudiosbyId);
router.post("/post",addLivetvaudios);
router.delete("/delete/:_id",deletelivetvaudios);
router.patch("/patch/:_id",LivetvaduioPatch);



