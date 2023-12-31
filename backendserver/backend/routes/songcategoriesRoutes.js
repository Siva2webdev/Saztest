import express from "express";
const router = express.Router();
// import song_categories from "../models/song_categories.js";
import { songcategoriesbyObId } from "../Controller/songcategoriesController.js";
import songcategoriesdata from "../Controller/songcategoriesController.js";
import { addsongcategories } from "../Controller/songcategoriesController.js";
import { deletesongcategories } from "../Controller/songcategoriesController.js";
import { songcategoriesPatch } from "../Controller/songcategoriesController.js";
export default router;

router.get("/find",songcategoriesdata);
router.get("/:_id",songcategoriesbyObId);
router.post("/post",addsongcategories);
router.delete("/delete/:_id",deletesongcategories);
router.patch("/patch/:_id",songcategoriesPatch);




// router.get("/", async (req, res) => {
//   try {
//     const songcategoriesdata = await song_categories.find();
//     res.status(200).json(songcategoriesdata);

//     // adminsdata.json();
//     console.log(songcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
