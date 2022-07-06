// mongodb+srv://<username>:<password>@cluster0.mm66w.mongodb.net/test

const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://udemy:udemy@cluster0.mm66w.mongodb.net/mmpcars-udemy' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose