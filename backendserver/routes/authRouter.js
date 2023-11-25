 import express from "express";
import {signup} from "../Controller/authController.js";
import {getuser } from "../Controller/authController.js"
import login from "../Controller/authController.js"
import authController from "../Controller/authController.js"
 const router=express.Router()
 router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getuser").get(getuser);
// router.route("/signin").post(signin);


export default router;
