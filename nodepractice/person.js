const mongoose = require('mongoose')
const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum :['chef','waiter','manager'],
        required:true
    }
})

const Person = mongoose.model('Person', personschema)
module.exports = Person
