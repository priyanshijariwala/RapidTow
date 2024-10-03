import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import BASE_URL from "../Services/Helper"

function Admin_Home() {
  const host = BASE_URL;

  const [users, setUsers] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState([]);
  
  // Get data
  const handleLoad = async () => {
    try {
      //fetch vehicle
      const response2 = await fetch(`${host}/api/cartow/getallvehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json'
        }
      });
      const vehiclesJson = await response2.json();
      console.log("Vehicle Data: ", vehiclesJson); 
      setVehicleDetails(vehiclesJson);
      
      //fetch user
      
    } catch (error) {
      console.error('Error fetching user or vehicle details:', error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  console.log(vehicleDetails)
  return (
    <>
      <div>
        {vehicleDetails.map(async (vehicleDet, index) => {
          // const user = findUserById(vehicleDetails.user_id);
          
          const response1 = await fetch(`${host}/api/authentication/getalluser/${vehicleDet._id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'Application/json'
            }
          });
          const usersJson = await response1.json();
          console.log(usersJson)
          return (
            <div key={index}>
              <h3>Booking {index + 1}</h3>
              <Table className='admintable'>
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>{vehicleDet.status}</td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td>{vehicleDet._id}</td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    {/* <td>{usersJson.username || 'Unknown'}</td> */}
                  </tr>
                  <tr>
                    <td>Email</td>
                    {/* <td>{usersJson.email || 'Unknown'}</td> */}
                  </tr>
                  <tr>
                    <td>Fullname</td>
                    {/* <td>{usersJson.fullname || 'Unknown'}</td> */}
                  </tr>
                  <tr>
                    <td>Contact</td>
                    {/* <td>{usersJson.contact_no || 'Unknown'}</td> */}
                  </tr>
                  <tr>
                    <td>DOB</td>
                    {/* <td>{usersJson.DOB || 'Unknown'}</td> */}
                  </tr>
                  <tr>
                    <td>Vehicle Model Name</td>
                    <td>{vehicleDet.vehicle_model_name}</td>
                  </tr>
                  <tr>
                    <td>Vehicle Company Name</td>
                    <td>{vehicleDet.vehicle_company_name}</td>
                  </tr>
                  <tr>
                    <td>Vehicle Number</td>
                    <td>{vehicleDet.vehicle_number}</td>
                  </tr>
                  <tr>
                    <td>Old Destination</td>
                    <td>{vehicleDet.old_destination}</td>
                  </tr>
                  <tr>
                    <td>New Destination</td>
                    <td>{vehicleDet.new_destination}</td>
                  </tr>
                  <tr>
                    <td>Payment Mode</td>
                    <td>{vehicleDet.payment_mode}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Admin_Home;
