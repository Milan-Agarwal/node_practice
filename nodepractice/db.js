const mongoose = require('mongoose') 
const mongourl = process.env.mongourl
// const mongourl = 'mongodb+srv://divyaagarwal9251:<divya123>@cluster0.dxml0jf.mongodb.net/'
require('dotenv').config()


mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db = mongoose.connection;


db.on('connected',()=>{
    console.log('aapka sampark MongoDB server ke saath joda gaya')
})
db.on('error',()=>{
    console.log('kuch toh gadbad hai daya from db.js')
})
db.on('disconnected',()=>{
    console.log('sampark toot gaya ); ')
})
module.exports = db