const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const Person = require('./person')

app.get('/person', async function(req,res){
    try{
        const data = await Person.find()
        console.log("data nikala gaya from database in server.js")
        res.status(200).json(data)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error : " gadbad hai ye baba"})
    }
})
app.post('/person',async function(req,res){
    try{
        const data = req.body   // assuming the data is store in req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        console.log('data save kar liya aapka in server.js')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'ye gadbad hai baba in server.js'})
    }
})

const personRouter = require('./personRoutes')

app.use('/person',personRouter)

const port = process.env.port
app.listen(port, ()=>{
    console.log('listening on port 3000')
});
// hello bro