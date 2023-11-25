import express from "express";
const router = express.Router();
import Livetvcategoriesdata from "../Controller/livetvcategoriesController.js";
import { livetvcategoriesbyId } from "../Controller/livetvcategoriesController.js";
import { addlivetvcategories } from "../Controller/livetvcategoriesController.js";
import { deletelivetvcategories } from "../Controller/livetvcategoriesController.js";
import { livetvcategoriesPatch } from "../Controller/livetvcategoriesController.js";
export default router;





router.get("/find",Livetvcategoriesdata);
router.get("/:_id",livetvcategoriesbyId);
router.post("/post",addlivetvcategories);
router.delete("/delete/:_id",deletelivetvcategories);
router.patch("/patch/:_id",livetvcategoriesPatch);


// router.get("/", async (req, res) => {
//   try {
//     const livetvcatdata = await livetv_categories.find();
//     res.status(200).json(livetvcatdata);

//     // adminsdata.json();
//     console.log(livetvcatdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
