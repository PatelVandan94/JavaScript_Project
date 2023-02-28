const { number, boolean } = require("joi");
let mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Practice_database").then(()=> console.log("successfully connected")).catch((err)=> console.log(err));

const practiceSchema = new mongoose.Schema({
    name: String,
    position: String,
    age: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const ItemStore = new mongoose.model("itemstore",practiceSchema)

const mongooseDocument = new ItemStore({
    name: "Vandan",
    position: "Intern",
    age: 21,
    active: true,
})

mongooseDocument.save()