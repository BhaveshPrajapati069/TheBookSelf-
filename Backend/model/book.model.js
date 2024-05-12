import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    title:String,
    Price:Number,
    image:String,
    category:String
})

const Book=mongoose.model("Book",bookSchema);

export default Book;