const mongoose=require('mongoose');
const url="mongodb://localhost:27017/cartow";

async function connectToMongo(){
    try{
        await mongoose.connect(url);
        console.log("Connected to mongodb");
    }
    catch(error){
        console.log("Error in connecting : ",error);
    }
}
module.exports = connectToMongo