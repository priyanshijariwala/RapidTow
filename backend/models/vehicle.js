const mongoose=require('mongoose');
const {Schema}=mongoose;

const vehicleSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    vehicle_model_name:{
        type:String,
        require:true,
    },
    vehicle_company_name:{
        type:String,
        require:true,
    },
    vehicle_number:{
        type:Number,
        require:true,
    },
    old_destination:{
        type:String,
        require:true,
    },
    new_destination:{
        type:String,
        require:true,
    },
    payment_mode:{
        type:String,
        require:true,
    }
});
const vehicle = mongoose.model('registration', vehicleSchema);
module.exports = vehicle;