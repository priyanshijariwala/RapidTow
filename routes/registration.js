const express=require('express');
const router=express.Router;
const fetchuser=require("../middleware/fetchuser");
const vehicle=require("../models/vehicle");
const {body,validationResult}=require("express-validator");

//get all vehicles data
//use for user registration history
router.get("/fetchallvehicle",fetchuser,async(req,res)=>{
    try{
        const vehicles=await vehicle.find({user:req.user.id});
        res.json(vehicles);
    }
    catch(error){
        console.error(error.message);
    };
    
    
});


router.post("/register",fetchuser,
    [
        body("vehicle_model_name","Enter the model of your vehicle"),
        body("vehicle_company_name","Enter the company of your vehicle"),
        body("vehicle_number","Enter your vehicle number"),
        body("old_destination","Enter vehicle current destination"),
        body("new_destination","Enter vehicle new destination"),
        body("payment_mode","cash,cheque,GPay")
    ],
async(req,res)=>{
    try{
        const {vehicle_model_name,vehicle_company_name,vehicle_number,old_destination,new_destination,payment_mode} = req.body;
        const vehicle =new vehicles(
            user = req.user.id,
            vehicle_model_name,
            vehicle_company_name,
            vehicle_number,
            old_destination,
            new_destination,
            payment_mode
        );
        const saveVehicle=await vehicle.save();
        res.json(saveVehicle);
    }catch(error){
        console.log(error);
    }
});