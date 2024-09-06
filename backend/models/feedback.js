const mongoose=require('mongoose');
const {Schema}=mongoose;

const feedbackSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    feedback:{
        type:String,
        require:true,
    },
    
});
const feedback = mongoose.model('getfeedback', feedbackSchema);
module.exports = feedback;