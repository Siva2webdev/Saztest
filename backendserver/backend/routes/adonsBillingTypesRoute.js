import express from "express";
import adonsBillingTypesdata from "../Controller/adonsBillingTypesController.js";
import { getAdonsBillingTypesbyObId,addAdonsBillingTypes,deleteAdonsBillingTypes,adonsbillingtypesPatch} from "../Controller/adonsBillingTypesController.js";
const router = express.Router();
export default router;
// module.exports= router;
// router.get("/", async (req, res) => {
//   try {
//     const adonsdata = await adons_billing_types.find();
//     res.status(200).json(adonsdata);

//     // adminsdata.json();
//     console.log(adonsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/getadonsbillingtypes",adonsBillingTypesdata)
router.get("/getadonsbillingtypes/:_id",getAdonsBillingTypesbyObId);
router.post("/post" , addAdonsBillingTypes)
router.delete("/delete/:_id",deleteAdonsBillingTypes)
router.patch("/patch/:_id",adonsbillingtypesPatch);


