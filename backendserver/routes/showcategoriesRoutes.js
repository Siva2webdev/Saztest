import express from "express";
const router = express.Router();
// import show_categories from "../models/show_categories.js";
import { showcategoriesbyObId } from "../Controller/showcategoriesController.js";
import showcategoriesdata from "../Controller/showcategoriesController.js";
import { addshowcategories } from "../Controller/showcategoriesController.js";
import { deleteshowcategories } from "../Controller/showcategoriesController.js";
import { showcategoriesPatch } from "../Controller/showcategoriesController.js";
export default router;

router.get("/find",showcategoriesdata);
router.get("/get/:_id",showcategoriesbyObId);
router.post("/post",addshowcategories);
router.delete("/delete/:_id",deleteshowcategories);
router.patch("/patch/:_id",showcategoriesPatch);


// router.get("/", async (req, res) => {
//   try {
//     const showcategoriesdata = await show_categories.find();
//     res.status(200).json(showcategoriesdata);

//     // adminsdata.json();
//     console.log(showcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
