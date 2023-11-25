import express from "express";
const router = express.Router();
// import show_sub_categories from "../models/show_sub_categories.js";
import { showsubcategoriesbyObId } from "../Controller/showsubcategoriesController.js";
import showsubcategoriesdata from "../Controller/showsubcategoriesController.js";
import { addshowsubcategories } from "../Controller/showsubcategoriesController.js";
import { deleteshowsubcategories } from "../Controller/showsubcategoriesController.js";
import { showsubcategoriesPatch } from "../Controller/showsubcategoriesController.js";
export default router;

router.get("/find",showsubcategoriesdata);
router.get("/get/:_id",showsubcategoriesbyObId);
router.post("/post",addshowsubcategories);
router.delete("/delete/:_id",deleteshowsubcategories);
router.patch("/patch/:_id",showsubcategoriesPatch);



// router.get("/", async (req, res) => {
//   try {
//     const showsubcategoriesdata = await show_sub_categories.find();
//     res.status(200).json(showsubcategoriesdata);

//     // adminsdata.json();
//     console.log(showsubcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
