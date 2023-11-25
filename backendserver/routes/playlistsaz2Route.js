import express from "express";
const router = express.Router();
// import Playlist_saz1 from "../models/Playlist_saz1.js";
import { playlist_saz2Patch, playlistsaz2byObId } from "../Controller/playlistsaz2Controller.js";
import playlistsaz2data from "../Controller/playlistsaz2Controller.js";
import { addplaylistsaz2 } from "../Controller/playlistsaz2Controller.js";
import { deleteplaylistsaz2 } from "../Controller/playlistsaz2Controller.js";
export default router;

router.get("/find",playlistsaz2data);
router.get("/:_id",playlistsaz2byObId);
router.post("/post",addplaylistsaz2);
router.delete("/delete/:_id",deleteplaylistsaz2);
router.patch("/patch/:_id",playlist_saz2Patch);



// router.get("/", async (req, res) => {
//   try {
//     const playlistsaz2data = await Playlist_saz1.find();
//     res.status(200).json(playlistsaz2data);

//     // adminsdata.json();
//     console.log(playlistsaz2data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
