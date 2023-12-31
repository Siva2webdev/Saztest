import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";
import adons_billing_types from "../models/adons_billing_types.js";



const adonsBillingTypesdata =async (req, res) => {
  try {
    const adonsBillingTypesdata1 = await adons_billing_types.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      adonsBillingTypesdata1

      });

  } catch (error) {


    res.status(404).json({

      status:"fail",
      message:error.message
    })
  }
}
export default  adonsBillingTypesdata;

const getAdonsBillingTypesbyObId = async (req, res) => {
  try {
    const data = await adons_billing_types.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { getAdonsBillingTypesbyObId };

const addAdonsBillingTypes = async (req, res) => {
  const {
    id,
    name,

    probe_status,
  } = req.body;
  try {
    const newData = new adons_billing_types({
        id,
        name,

      probe_status,
    });
    await newData.save();
    const adonsBillingTypesdata = await adons_billing_types.find();
    return res.json(await adons_billing_types.find());

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
export { addAdonsBillingTypes };

// const moviesPatch = async (req, res) => {
//   const adonsBillingTypesdata = await adons_billing_types.find();
//   let _id = req.params._id; //string will be converted to Number type
//   let movieToUpdate = await adonsBillingTypesdata.find((el) => el._id === _id);

//   if (!movieToUpdate) {
//     res.status(404).json({
//       status: "fail",
//       message: "No movieobject with ID " + _id + " is found",
//     });
//   }

//   let index = adonsBillingTypesdata.indexOf(movieToUpdate); // if id is 4 then index =3
//   Object.assign(movieToUpdate, req.body);
//   adonsBillingTypesdata[index] = movieToUpdate;

//   res.status(200).json({
//     status: "success",

//     data: {
//       movieToUpdate,
//     },
//   });

//   res.status(404).json({
//     status: "fail",
//   });
// };

// export { moviesPatch };

const deleteAdonsBillingTypes = async (req, res) => {
  try {
    const deletedAdonsBillingTypes = await adons_billing_types.findByIdAndDelete(req.params._id);
    if (!deletedAdonsBillingTypes) res.status(404).send("No item found");

    // return
    const adonsBillingTypesdata = await adons_billing_types.find();

    res.status(200).json({
      status: "success",
      length: adonsBillingTypesdata.length,
      data: {
        adonsBillingTypesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export { deleteAdonsBillingTypes };



//PATCH API
const adonsbillingtypesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;
 
    const updated = await adons_billing_types.findOneAndUpdate(
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
export { adonsbillingtypesPatch };

//In moviesRoute.js
//add the following

//In moviesRoute.js
//add this

// const videosdata =async (req, res) => {
//     try {
//       const adonsBillingTypesdata = await adons_billing_types.find();

//     res.status(200).json({

//       status:"success",
//       length:adonsBillingTypesdata.length,
//       data:{

//         adonsBillingTypesdata}
//       });

//     } catch (error) {

//       res.status(404).json({

//         status:"fail",
//         message:error.message
//       })
//     }
//   }
//   export default  videosdata;

// const addAdonsBillingTypes=async(req,res)=>
// {

// try{
//   const adonsBillingTypesdata = await adons_billing_types.find();

//   const newId=adonsBillingTypesdata[adonsBillingTypesdata.length-1].id+1;
//   const newMovie=Object.assign({id:  newId},req.body);
//   adonsBillingTypesdata.push(newMovie);
//   // fs.writeFile()
//   res.status(200).json({

//     status:"success",
//     length:adonsBillingTypesdata.length,
//     data:{

//       adonsBillingTypesdata}
//     });

//   console.log(req.body)

// }
// catch(err)
// {
// console.log(err)
// }
// }
// export {addAdonsBillingTypes}

//   const moviesPatch=async(req,res)=>

//   {

//       const adonsBillingTypesdata = await adons_billing_types.find();
//       let id= req.params.id  //string will be converted to Number type
//       let movieToUpdate= await adonsBillingTypesdata.find(el=>el.id===id);

//       if(!movieToUpdate){

//         res.status(404).json({

//           status:"fail",
//           message:"No movieobject with ID "+id+" is found"
//         })
//       }

//       let index= adonsBillingTypesdata.indexOf(movieToUpdate);// if id is 4 then index =3
//       Object.assign(movieToUpdate,req.body);
//       adonsBillingTypesdata[index] = movieToUpdate;

//       res.status(200).json({

//         status:"success",

//         data:{

//           movieToUpdate}
//         });

//       res.status(404).json({

//         status:"fail",

//       })

//     }

//   export{moviesPatch}
// //localhost:5001/api/moviesortable

// const now = new Date()
// date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log(now);

// const movieSortable =async (req, res) => {

// Define a regex pattern for the desired date-time format
// const dateTimePattern =date.format(now, 'YYYY/MM/DD HH:mm:ss');

// // Use the .find() method with regex to filter the data
// const data=categories.find({ created: { $regex: dateTimePattern } })

//   // Events with timestamps matching the regex pattern
//   console.log("Events with matching timestamps:", data);
// const startDate = new Date('2015-07-28T14:42:16.000Z'); // Start date
// const endDate = new Date('2023-12-31T23:59:59Z'); // End date

// let query= {created: {
//   $gte: startDate,
//   $lte: endDate}}

// const sorted=categories.find(query)

// res.status(200).json({

//       status:"success",
//       length:sorted.length,
//       data:{

//         sorted}
//       });

// let queryStr=JSON.stringify(req.query);
// queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

// const queryObj=JSON.parse(queryStr);
// console.log(queryObj);

// console.log(req.query)
// try{
//   const moviesortable= await categories.find(queryObj);

//     res.status(200).json({

//     status:"success",
//     length:moviesortable.length,
//     data:{

//       moviesortable}
//     });
//   }

//     catch(err)
//     {

//       res.status(404).json({

//         status:"fail",
//         message:err.message}
//       )}

// if (categories.created) {
//   const date = created
//   const dateRange = categories.created.slice(0, -1); // strip the "d" from "7d"
//   date.setDate( date- dateRange);
//   req.query.start = { $lte: `2015-07-28T14:42:16.000Z` };
//   console.log(req.query);
// }

// try{
//   const moviesortable= await categories.find({$expr:
//     {

//       $and: [
//     {
//       "$eq": [{"$month": "$created"},1]
//     },
//     {
//       "$eq": [{"$year": "$created"},2012]

//     },

//   ]},

// });

//     res.status(200).json({

//     status:"success",
//     length:moviesortable.length,
//     data:{

//       moviesortable}
//     });
//   }

// catch(err)
// {

//   res.status(404).json({

//     status:"fail",
//     message:err.message}
//   )}

//   }

// export {movieSortable}
