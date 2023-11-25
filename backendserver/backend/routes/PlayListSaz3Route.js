import express from "express";
const router = express.Router();
import PlayListSaz3data from "../Controller/PlayListSaz3Controller.js";
import { PlayListSaz3byId } from "../Controller/PlayListSaz3Controller.js";
import { addPlayListSaz3 } from "../Controller/PlayListSaz3Controller.js";
import { deletePlayListSaz3 } from "../Controller/PlayListSaz3Controller.js";
import { PlayListSaz3patch } from "../Controller/PlayListSaz3Controller.js";
export default router;



router.get("/find",PlayListSaz3data);
router.get("/:_id",PlayListSaz3byId);
router.post("/post",addPlayListSaz3);
router.delete("/delete/:_id",deletePlayListSaz3);
router.patch("/patch/:_id",PlayListSaz3patch);



// router.get("/", async (req, res) => {
//   try {
//     const Playlist_saz3data = await Playlist_saz3.find();
//     res.status(200).json(Playlist_saz3data);

//     // adminsdata.json();
//     console.log(Playlist_saz3data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
