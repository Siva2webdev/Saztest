import express from "express";
import transactionsdata from "../Controller/transcationsController.js";
import { transactionsbyId } from "../Controller/transcationsController.js";
import { addtransactions } from "../Controller/transcationsController.js";
import { deletetransactions } from "../Controller/transcationsController.js";
import { transactionspatch } from "../Controller/transcationsController.js";
const router = express.Router();
export default router;



router.get("/find",transactionsdata);
router.get("/:_id",transactionsbyId);
router.post("/post",addtransactions);
router.delete("/delete/:_id",deletetransactions);
router.patch("/patch/:_id",transactionspatch);

// router.get("/", async (req, res) => {
//   try {
//     const transactionsdata = await transactions.find();
//     res.status(200).json(transactionsdata);

//     // adminsdata.json();
//     console.log(transactionsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
