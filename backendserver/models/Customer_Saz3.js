import mongoose from "mongoose";
const customerSaz3Schema = new mongoose.Schema({
  Id: {
    type: String,
  },

  CustomerId: {
    type: String,
  },
  Model_Name: {
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
  Expiry_Date: {
    type: String,
  },
  Created_Date: {
    type: String,
  },
});
const customer_saz3 = new mongoose.model("customer_saz3", customerSaz3Schema);
export default customer_saz3;
