const mongoose=require('mongoose');
// const url="mongodb://localhost:27017/cartow";
const url="mongodb+srv://priyanshi1jariwala:<prps22452245>@cluster0.pekprfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


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