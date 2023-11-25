import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const dashboardcategoriesSchema = new mongoose.Schema({
  Id: {
    type: String,
  },
  CustomerId: {
    type: String,
  },
  Model_Name: {
    type: String,
  },
  Name: {
    type: String,
  },
  Devicetype: {
    type: String,
  },
  isTrail: {
    type: String,
  },
  Active: {
    type: String,
  },
  Expiry_Date: {
    type: String,
  },
  Created_Date:{
    type: String,
  }
  
});
const customer_saz1 = new mongoose.model("customer_saz1", dashboardcategoriesSchema);
export default customer_saz1;