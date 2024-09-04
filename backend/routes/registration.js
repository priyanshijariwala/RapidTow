const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const vehicle = require("../models/vehicle");
const { body, validationResult } = require("express-validator");

//get all vehicles data of same user
//use for user registration history
router.get("/fetchallvehicle", fetchuser, async (req, res) => {
  try {
    const vehicles = await vehicle.find({ user: req.user.id });
    res.json(vehicles);
  } catch (error) {
    console.error(error.message);
  }
});

//get all vehicle data of all user

router.get("/getallvehicle", async (req, res) => {
  try {
    const vehicles = await vehicle.find();
    res.json(vehicles);
  } catch (error) {
    console.error(error.message);
  }
});

//booking for tow
router.post(
  "/register",
  fetchuser,
  [
    body("vehicle_model_name", "Enter the model of your vehicle"),
    body("vehicle_company_name", "Enter the company of your vehicle"),
    body("vehicle_number", "Enter your vehicle number"),
    body("old_destination", "Enter vehicle current destination"),
    body("new_destination", "Enter vehicle new destination"),
    body("payment_mode", "cash,cheque,GPay"),
  ],
  async (req, res) => {
    try {
      const {
        vehicle_model_name,
        vehicle_company_name,
        vehicle_number,
        old_destination,
        new_destination,
        payment_mode,
      } = req.body;
      const status="Active";


      const new_vehicle = new vehicle({
        user: req.user.id,
        vehicle_model_name,
        vehicle_company_name,
        vehicle_number,
        old_destination,
        new_destination,
        payment_mode,
        status:status
      }
      );

      const saveVehicle = await new_vehicle.save();
      res.json(saveVehicle);
    } catch (error) {
      console.log(error);
    }
  }
);

//updating towing details

router.put("/updatevehicle/:id", fetchuser, async (req, res) => {

  const {
    vehicle_model_name,
    vehicle_company_name,
    vehicle_number,
    old_destination,
    new_destination,
    payment_mode,
  } = req.body;
 const status="Active"
  try {

    const updatevehicle = {}

    if (vehicle_model_name) { updatevehicle.vehicle_model_name = vehicle_model_name; }
    if (vehicle_company_name) { updatevehicle.vehicle_company_name = vehicle_company_name; }
    if (vehicle_number) { updatevehicle.vehicle_number = vehicle_number; }
    if (old_destination) { updatevehicle.old_destination = old_destination; }
    if (new_destination) { updatevehicle.new_destination = new_destination; }
    if (payment_mode) { updatevehicle.payment_mode = payment_mode; }
    updatevehicle.status="Active";

    let update_vehicle = await vehicle.findById(req.params.id);
    if (!update_vehicle) {
      return res.status(404).send("Not Found");
    }

    update_vehicle = await vehicle.findByIdAndUpdate(
      req.params.id,
      { $set: updatevehicle },
      { new: true }
    )
    res.json({ update_vehicle })
  } catch (error) {
    console.log(error);
  }
});

//delete registration(cancel req)

router.delete("/deletevehicle/:id",fetchuser,async(req,res)=>{
  try{

    let delete_vehicle=await vehicle.findById(req.params.id);
    if(!delete_vehicle){
      return res.status(404).send("Not Found");
    }
    delete_vehicle= await vehicle.findByIdAndDelete(req.params.id);
    res.json({"Success" : "deleted"})
  }catch(error){
    console.log(error);
  }
  });

module.exports = router; 
