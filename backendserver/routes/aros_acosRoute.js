import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import aros_acos from "../models/aros_acos.js";
import aros_acosdata from "../Controller/aros_acosController.js";
import { aros_acosbyObId } from "../Controller/aros_acosController.js";
import { addArosacos } from "../Controller/aros_acosController.js";
import { deletearosacos } from "../Controller/aros_acosController.js";
import { arosacosPatch } from "../Controller/aros_acosController.js";
export default router;

router.get("/find",aros_acosdata);
router.get("/:_id",aros_acosbyObId);
router.post("/post",addArosacos);
router.delete("/delete/:_id",deletearosacos)
router.patch("/patch/:_id",arosacosPatch);
router.get("/", async (req, res) => {
  try {
    const aros_acosdata = await aros_acos.find();
    res.status(200).json(aros_acosdata);

    // adminsdata.json();
    console.log(aros_acosdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});