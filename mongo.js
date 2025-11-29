const mongoose = require("mongoose");

// create a connection with mongoose :

mongoose.connect("mongodb://localhost:27017/react-login-tut") // instead of fetch we use this

.then(()=>{
    console.log("MongoDB connected");
})

.catch((err)=>{
    console.log("Error occured in db connection");
})

// create a schema for user ( email , pass )

const newSchema = new mongoose.Schema({

        email : {
            type : "string",
            required : "true"
        },

        password : {
            type : "string",
            required : "true"
        }

});

// now create the mongodb table collection to store all data (schemas)

const collections = mongoose.model("collection", newSchema);

module.exports = collections ;