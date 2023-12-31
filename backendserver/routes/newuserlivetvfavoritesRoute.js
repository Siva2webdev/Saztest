import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { newuserlivetvfavoritesPatch, newuserlivetvfavoritesbyObId } from "../Controller/newuserlivetvfavoritesController.js";
import newuserlivetvfavoritesdata from "../Controller/newuserlivetvfavoritesController.js";
import { addnewuserlivetvfavorites } from "../Controller/newuserlivetvfavoritesController.js";
import { deletenewuserlivetvfavorites } from "../Controller/newuserlivetvfavoritesController.js";
export default router;

router.get("/find",newuserlivetvfavoritesdata);
router.get("/:_id",newuserlivetvfavoritesbyObId)
router.post("/post",addnewuserlivetvfavorites)
router.delete("/delete/:_id",deletenewuserlivetvfavorites)
router.patch("/patch/:_id",newuserlivetvfavoritesPatch);

// router.get("/", async (req, res) => {
//   try {
//     const newuserlivetvfavoritesdata = await catchup_programs.find();
//     res.status(200).json(newuserlivetvfavoritesdata);

//     // adminsdata.json();
//     console.log(newuserlivetvfavoritesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
