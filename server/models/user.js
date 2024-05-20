import  mongoose  from "mongoose";
var userSchema = mongoose.Schema({
   
    username: {type: String,required: true},
    password: {type: String,required: true},
   
    
 });
 var User = mongoose.model("User", userSchema);
 export default User;