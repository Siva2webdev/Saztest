import customer_saz2 from "../models/customer_saz2.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const customer_saz2data =async (req, res) => {
    try {
      const data = await customer_saz2.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  customer_saz2data;


// // // GET by _id
const customer_saz2byObId=async(req,res)=>
{
try{

  const data=await customer_saz2.findById(req.params._id)
  return res.json(data);
}
catch(err)
{
  console.log(err.message);
  res.status(404).json({

    status:"fail",
    message:err.message
  })
}

}
export {customer_saz2byObId}


// // // //POST API
const addCustomer_saz2=async(req,res)=>
{
const {  
    id,
    CustomerId,
    Model_Name,
    Devicetype,
    Name,
    isTrail,
    Active,
    Expiry_Date,
    Created_Date

}= req.body;
  try{

    const newData=new customer_saz2({
        id,
    CustomerId,
    Model_Name,
    Devicetype,
    Name,
    isTrail,
    Active,
    Expiry_Date,
    Created_Date
    
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await customer_saz2.find());

    // res.status(201).json({

    //       status:"success",
    //       length:newData.length,
    //       data:{
    //         newData
    //         }
    //       });

  }
  catch(err)
  {

    console.log(err.message);
  }

}
export {addCustomer_saz2}




 //DELETE API
const deletecustomer_saz2=async(req,res)=>
{
try{

  const deleteCustomer_saz2=await customer_saz2.findByIdAndDelete(req.params._id)
  if(!deleteCustomer_saz2) res.status(404).send("No item found")

  // return
  const arosdata =await customer_saz2.find()

  res.status(200).json({

    status:"success",
    length:customer_saz2data.length,
    data:{

        customer_saz2data}
    });

}
catch(err)
{


  res.status(404).json({

    status:"fail",
    message:err.message
  })
}

}
export {deletecustomer_saz2}



// // // patch

const customer_saz2Patch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await customer_saz2.findOneAndUpdate({_id:patchId},
   req.body,{new:true})
console.log(updated);
res.json({updated})
}
catch(err)
{
  res.status(500).send(err.message);
  console.log(err.message)
}
}
export{customer_saz2Patch};

