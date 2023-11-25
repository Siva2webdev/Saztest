import express from "express";
const router = express.Router();
// import shows from "../models/shows.js";
import { showsbyObId } from "../Controller/showsController.js";
import showsdata from "../Controller/showsController.js";
import { addshows } from "../Controller/showsController.js";
import { deleteshows } from "../Controller/showsController.js";
import { showsPatch} from "../Controller/showsController.js";
export default router;

router.get("/find",showsdata);
router.get("/get/:_id",showsbyObId);
router.post("/post",addshows);
router.delete("/delete/:_id",deleteshows);
router.patch("/patch/:_id",showsPatch);




// router.get("/", async (req, res) => {
//   try {
//     const showsdata = await shows.find();
//     res.status(200).json(showsdata);

//     // adminsdata.json();
//     console.log(showsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
