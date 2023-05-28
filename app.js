const express= require('express')
// var bodyParser = require('body-parser')

const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connection')
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/tasks', tasks)



 


app.get('/home',(res,req)=>{
    res.send('Task Manager')
})


const port= 3000

const start= async() => {
   try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log('server is runing...'))
    
   } catch (error) {
      console.log(error)
   }
}

start()
