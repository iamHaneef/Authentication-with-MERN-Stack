const  express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const collection=require("./mongo")

// Middleware setup
app.use(express.json())
app.use(cors())


// GET request handler (just an example, not performing any operation)

app.get("/",(req,res)=>{
    res.send("Hello world !");
})
// POST request handler for login
app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        res.status(500).json("notexist");
    }
});

// POST request handler for registration

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const newUser = {
        email: email,
        password: password
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([newUser]);
            res.json("notexist");
        }
    } catch (error) {
        res.status(500).json("notexist");
    }
});

// Start the server //for localhost
app.listen(8000,()=>{
    console.log("server started")
})


/*
app.post("/register",asyn(req,res)=>
{
    const{email,password}=req.body;

    const data={
        email:email,
        password:password
    }

    try{
        const check= await collection.findOne({email:email})
        
        if(check)
        {
            res.json("exists")
        }
        else{
            res.json("notexists");
            await collection.insertMany([data])
        }
    } 
}) */