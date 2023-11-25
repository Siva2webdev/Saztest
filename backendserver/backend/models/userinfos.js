import mongoose from "mongoose";
const userinfosSchema=new mongoose.Schema({
    name:{
        type:String
        },
    email:{
        type:String
    },    
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    },
    __v:{
        type:String
    },
    
})

const userinfos=new mongoose.model("userinfos",userinfosSchema);
export default userinfos;