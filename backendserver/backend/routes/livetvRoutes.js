import express from "express";
const router = express.Router();
import Livetvsdatas from "../Controller/livetvsController.js";
import { LivetvsbyId } from "../Controller/livetvsController.js";
import { addLivetvs } from "../Controller/livetvsController.js";
import { deletelivetvs } from "../Controller/livetvsController.js";
import { LivetvsPatch } from "../Controller/livetvsController.js";
export default router;



router.get("/find",Livetvsdatas);
router.get("/:_id",LivetvsbyId);
router.post("/post",addLivetvs);
router.delete("/delete/:_id",deletelivetvs);
router.patch("/patch/:_id",LivetvsPatch);





// router.get("/", async (req, res) => {
//   try {
//     const livetvdata = await livetvs.find();
//     res.status(200).json(livetvdata);

//     // adminsdata.json();
//     console.log(livetvdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
