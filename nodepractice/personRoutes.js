const express = require('express')
const router = express.Router()
const Person = require('./person')




router.put('/:id',async(req,res)=>{  // update the document from database 
    try{
        const personid = req.params.id
        const updatedPersonData = req.body
        const response = await Person.findByIdAndUpdate(personid, updatedPersonData,{
            new:true,
            runValidators:true
        })
        if(!response){
            return res.status(400).json({error: 'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal Server Error in post catch block in personroutes'})
    }
})
router.delete('/:id',async(req,res)=>{  // delete the document from database 
    try{
        const personid = req.params.id

        const response = await Person.findByIdAndRemove(personid)
        if(!response){
            return res.status(400).json({error: 'person not found'})
        }
        console.log('data deleted')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal Server Error in post catch block in personroutes'})
    }
})


module.exports = router