import express from "express";

import usersdata, { deleteusers } from "../Controller/usersController.js";
import { usersbyId } from "../Controller/usersController.js";
import { addusers } from "../Controller/usersController.js";
import { userspatch } from "../Controller/usersController.js";
const router = express.Router();
export default router;




router.get("/find",usersdata);
router.get("/:_id",usersbyId);
router.post("/post",addusers);
router.delete("/delete/:_id",deleteusers);
router.patch("/patch/:_id",userspatch);


// router.get("/", async (req, res) => {
//   try {
//     const usersdata = await users.find();
//     res.status(200).json(usersdata);

//     // adminsdata.json();
//     console.log(usersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
