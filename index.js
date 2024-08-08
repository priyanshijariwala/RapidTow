const connectToMongo=require('./db');
const express=require('express');

connectToMongo()
const app=express()
const port=5000

var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/api/authentication', require('./routes/authentication'))
// app.use('/api/notes', require('./routes/notes'))

app.listen(port,()=>{
    console.log(` backend listening on port http://localhost:${port}`)
    
})
