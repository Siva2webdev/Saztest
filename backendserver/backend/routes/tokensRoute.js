import express from "express";
import tokensdata from "../Controller/tokensController.js";
import { tokensbyId } from "../Controller/tokensController.js";
import { addtokens } from "../Controller/tokensController.js";
import { deletetokens } from "../Controller/tokensController.js";
import { tokensPatch } from "../Controller/tokensController.js";
const router = express.Router();
export default router;



router.get("/find",tokensdata);
router.get("/:_id",tokensbyId);
router.post("/post",addtokens);
router.delete("/delete/:_id",deletetokens);
router.patch("/patch/:_id",tokensPatch);

// router.get("/", async (req, res) => {
//   try {
//     const tokensdata = await tokens.find();
//     res.status(200).json(tokensdata);

//     // adminsdata.json();
//     console.log(tokensdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
