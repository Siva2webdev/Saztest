import customer_saz1 from "../models/Customer_Saz1.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const customer_saz1data = async (req, res) => {
  try {
    const data = await customer_saz1.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
export default customer_saz1data;

//GET by _id
const customer_saz1byObId = async (req, res) => {
  try {
    const data = await customer_saz1.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { customer_saz1byObId };

//POST API
const addcustomer_saz1 = async (req, res) => {
  const { Id, CustomerId, Model_Name, Name, Devicetype, isTrail, Active, Expiry_Date, Created_Date} = req.body;
  try {
    const newData = new customer_saz1({
        Id,
        CustomerId,
        Model_Name,
        Name,
        Devicetype,
        isTrail,
        Active,
        Expiry_Date,
        Created_Date
    });
    await newData.save();
    // const videodata = await dashboard_categories.find();
    return res.json(await customer_saz1.find());

    // res.status(201).json({

    //       status:"success",
    //       length:newData.length,
    //       data:{
    //         newData
    //         }
    //       });
  } catch (err) {
    console.log(err.message);
  }
};
export { addcustomer_saz1 };


//PATCH API
const customer_saz1Patch = async (req, res) => {
    try {
      const patchId = req.params._id;
  
      const updated = await customer_saz1.findOneAndUpdate(
        { _id: patchId },
        req.body,
        { new: true }
      );
  
      console.log(updated);
      res.json({ updated });
    } catch (err) {
      res.status(500).send(err.message);
      console.log(err.message);
    }
  };
  export { customer_saz1Patch };

//DELETE API
const deletecustomer_saz1 = async (req, res) => {
  try {
    const deletedcustomer_saz1 =
      await customer_saz1.findByIdAndDelete(req.params._id);
    if (!deletedcustomer_saz1) res.status(404).send("No item found");

    // return
    const customer_saz1data = await customer_saz1.find();

    res.status(200).json({
      status: "success",
      length: customer_saz1data.length,
      data: {
        customer_saz1data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletecustomer_saz1 };


