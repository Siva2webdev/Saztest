import mongoose from "mongoose";
const playlistsaz1Schema=new mongoose.Schema({
id:{
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
const Playlist_saz1=new mongoose.model("Playlist_saz1",playlistsaz1Schema);
export default Playlist_saz1;
