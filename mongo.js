const mongoose = require("mongoose"); //defalut

// Connect to MongoDB id -->important
mongoose.connect("mongodb://localhost:27017/react-login-tut")
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log("Failed to connect to MongoDB", error);
});

// Define the user schema
const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// Create the collection model
const collection =mongoose.model("collection",newSchema);

module.exports = collection;
