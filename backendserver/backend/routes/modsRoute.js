import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import mods from "../models/mods.js";
import modsdata from "../Controller/modsController.js";
import { modsbyObId } from "../Controller/modsController.js";
import { addMods } from "../Controller/modsController.js";
import { deletemods } from "../Controller/modsController.js";
import { modsPatch } from "../Controller/modsController.js";
import { modsSortable } from "../Controller/modsController.js";
export default router;

router.get("/find",modsdata);
router.get("/:_id",modsbyObId);
router.post("/post",addMods);
router.delete("/delete/:_id",deletemods)
router.patch("/patch/:_id",modsPatch);
router.get("/filter",modsSortable);
router.get("/", async (req, res) => {
  try {
    const modsdata = await mods.find();
    res.status(200).json(modsdata);

    // adminsdata.json();
    console.log(modsdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});