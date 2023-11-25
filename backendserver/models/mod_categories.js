import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const mod_categoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  titel: {
    type: String,
  },
  image: {
    type: String,
  },
  createdate: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  visible: {
    type: String,
  },
  position: {
    type: String,
  },
  is_protected: {
    type: String,
  },
  is_deleted: {
    type: String,
  }
});
const mod_categories = new mongoose.model("mod_categories", mod_categoriesSchema);
export default mod_categories;
