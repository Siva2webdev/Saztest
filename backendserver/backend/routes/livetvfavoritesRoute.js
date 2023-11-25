import express from "express";
const router = express.Router();
import Livetvfavroutiesdata from "../Controller/livetvfavroutiesController.js";
import { LivetvfavroutiesbyId } from "../Controller/livetvfavroutiesController.js";
import { addLivetvfavrouties } from "../Controller/livetvfavroutiesController.js";
import { deleteLivetvfavrouties } from "../Controller/livetvfavroutiesController.js";
import { LivetvfavroutiesPatch } from "../Controller/livetvfavroutiesController.js";

export default router;

// 652690ad9e7b10a2a388c873

router.get("/find",Livetvfavroutiesdata);
router.get("/:_id",LivetvfavroutiesbyId);
router.post("/post",addLivetvfavrouties);
router.delete("/delete/:_id",deleteLivetvfavrouties);
router.patch("/patch/:_id",LivetvfavroutiesPatch);


// router.get("/", async (req, res) => {
//   try {
    
//     const livetvfavoritesdata = await livetv_favorites.find();
//     res.status(200).json(livetvfavoritesdata);

//     // adminsdata.json();
//     console.log(livetvfavoritesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
