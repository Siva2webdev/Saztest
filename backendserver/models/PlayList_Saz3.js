import mongoose from "mongoose";
const PlayListSaz3Schema=new mongoose.Schema({
Id:{
type:String
},
URL:{
    type:String
},
Active:
{
    type:String

},
Action:
{
    type:String
}
    
})
const Playlist_saz3=new mongoose.model("Playlist_saz3",PlayListSaz3Schema);
export default Playlist_saz3;