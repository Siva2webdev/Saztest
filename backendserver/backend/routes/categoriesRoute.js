import express from "express";
const router = express.Router();
import categories from "../models/categories.js"
import { categoriesbyObId } from "../Controller/categoriesController.js";
import categoriesdata from "../Controller/categoriesController.js";
import { addcategories } from "../Controller/categoriesController.js";
import { deletecategories } from "../Controller/categoriesController.js";
import { categoriesPatch } from "../Controller/categoriesController.js";
export default router;

router.get("/find",categoriesdata);
router.get("/:_id",categoriesbyObId)
router.patch("/patch/:_id",categoriesPatch);
router.post("/post",addcategories)
router.delete("/delete/:_id",deletecategories)
// router.get("/", async (req, res) => {
//   try {
//     const dashboardcategoriesdata = await dashboard_categories.find();
//     res.status(200).json(dashboardcategoriesdata);

//     // adminsdata.json();
//     console.log(dashboardcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
