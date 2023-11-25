import express from "express";
import video_categoriesdata from "../Controller/videocategoriesController.js";
import { video_categoriesbyId } from "../Controller/videocategoriesController.js";
import { addvideo_categoriesdata } from "../Controller/videocategoriesController.js";
import { deletevideocategories } from "../Controller/videocategoriesController.js";
import { videocategoriespatch } from "../Controller/videocategoriesController.js";
const router = express.Router();
export default router;


router.get("/find",video_categoriesdata);
router.get("/:_id",video_categoriesbyId);
router.post("/post",addvideo_categoriesdata);
router.delete("/delete/:_id",deletevideocategories);
router.patch("/patch/:_id",videocategoriespatch);






// router.get("/", async (req, res) => {
//   try {
//     const video_categoriesdata = await video_categories.find();
//     res.status(200).json(video_categoriesdata);

//     // adminsdata.json();
//     console.log(video_categoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
