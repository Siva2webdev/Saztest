import express from "express";
const router = express.Router();
// import audio_categories from "../models/audio_categories.js";
import { audiocategoriesPatch, audiocategoriesbyObId } from "../Controller/audiocategoriesController.js";
import audiocategoriesdata from "../Controller/audiocategoriesController.js";
import { addaudiocategories } from "../Controller/audiocategoriesController.js";
import { deleteaudiocategories } from "../Controller/audiocategoriesController.js";
export default router;

router.get("/find",audiocategoriesdata);
router.get("/:_id",audiocategoriesbyObId)
router.post("/post",addaudiocategories)
router.delete("/delete/:_id",deleteaudiocategories)
router.patch("/patch/:_id",audiocategoriesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const audiocategoriesdata = await audio_categories.find();
//     res.status(200).json(audiocategoriesdata);

//     // adminsdata.json();
//     console.log(audiocategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
