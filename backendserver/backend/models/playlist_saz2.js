import mongoose from "mongoose";
const playlist_saz2Schema=new mongoose.Schema({
id:{
type:String
},
name:{
    type:String
},
URL:{
    type:String
},
Active_Inactive:{
    type:String
},
Action:{
    type:String
},

})
const playlist_saz2=new mongoose.model("playlist_saz2",playlist_saz2Schema);
export default playlist_saz2;
