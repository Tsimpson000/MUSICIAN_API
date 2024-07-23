//Import Libraries

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//Import Routes
const musicianRoutes = require("./routes/musicianRoutes")
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postsRoutes");
const musicianRoutes = require("./routes/musicianRoutes");

const app = express();
const PORT = 5001;
const CONNECTION_STRING = process.env.CONNECTION_STRING;


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(CONNECTION_STRING);
        console.log(`Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
};
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//define routes
app.use("/Musician", musicianRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/musician", musicianRoutes); // Updated route path

app.listen(PORT, () =>{
    console.log(`Server running on localhost:${PORT}`);
});