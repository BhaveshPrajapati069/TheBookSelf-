import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookroute from "./route/book.route.js";
import useroute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

// connect to MongoDB

try {
    mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    }); 
    console.log("Connected to mongoDB");

} catch (error) {
    console.error("Error:", error);
}


//defining routes

app.use("/book",bookroute);
app.use("/user",useroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
