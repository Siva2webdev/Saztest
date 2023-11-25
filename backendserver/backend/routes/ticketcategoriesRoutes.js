import express from "express";
const router = express.Router();
// import ticket_categories from "../models/ticket_categories.js";
import { ticketcategoriesbyObId } from "../Controller/ticketcategoriesController.js";
import ticketcategoriesdata from "../Controller/ticketcategoriesController.js";
import { addticketcategories } from "../Controller/ticketcategoriesController.js";
import { deleteticketcategories } from "../Controller/ticketcategoriesController.js";
import { ticketcategoriesPatch } from "../Controller/ticketcategoriesController.js";
export default router;

router.get("/find",ticketcategoriesdata);
router.get("/:_id",ticketcategoriesbyObId);
router.post("/post",addticketcategories);
router.delete("/delete/:_id",deleteticketcategories);
router.patch("/patch/:_id",ticketcategoriesPatch);



// router.get("/", async (req, res) => {
//   try {
//     const ticketcategoriesdata = await ticket_categories.find();
//     res.status(200).json(ticketcategoriesdata);

//     // adminsdata.json();
//     console.log(ticketcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
