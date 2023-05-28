const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://aryan:Aryan@123@cluster0.cxpqtxy.mongodb.net/?retryWrites=true&w=majority";


const connectDB= (url)=>{
    return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
}

module.exports =connectDB
