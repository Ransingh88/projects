const mongoose = require('mongoose')


const connect = () => {
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`)
// .then(()=>{console.log("connected")})
// .catch((err)=>{console.log("failed")})  

const db = mongoose.connection
 
db.once("open",()=>{console.log("MongoDB Connected Successfully")})
db.on("error",(err)=>{console.error("MongoDB Conncetion Failed")})

}

module.exports = connect