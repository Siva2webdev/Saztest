import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";

import bcrypt from "bcryptjs"
 


const customer_saz2Schema = new mongoose.Schema({
  Id: {
    type: String,
  },
  Devicetype: {
    type: String,
  },
  Name: {
    type: String,
  },
  isTrail: {
    type: String,
  },
  Active_Inactive: {
    type: String,
  },
  Created_Date:{
    type: String,
},
Customer_Id: {
    type: String,
  },
  Expiry_Date: {
    type: String,
  },
  Model_Name: {
    type: String,
  }
});
const customer_saz2 = new mongoose.model("customer_saz2", customer_saz2Schema);
export default customer_saz2;
