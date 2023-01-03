const express = require('express')
const app = express()
const port = 8000
const cors = require('cors');
app.use(cors())


require('./db/mongodb');

const moneyRoute = require('./routes/monyRoute');


// fetch all documents

const Money = require('./model/moneySchema');

app.use('/',moneyRoute)

app.get('/fetchall',(req,res)=>{
    Money.find((err,val)=>{
        if(err){
            console.log(err)
    
        }else{
            res.json(val)
        }
    })

})

const Purpose=require('./model/purposeSchema')
app.get('/purpose',(req,res)=>{
    Purpose.find((err,val)=>{
        if(err){
            console.log(err)
    
        }else{
            res.json(val)
        }
    })

})

const Conversion=require('./model/convertSchema')
app.get('/conversion',(req,res)=>{
    Conversion.find((err,val)=>{
        if(err){
            console.log(err)
    
        }else{
            res.json(val)
        }
    })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



