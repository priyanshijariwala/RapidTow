import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Admin_Home() {
  const host = "http://localhost:5000";

  const [users, setUsers] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState([]);

  // Get data
  const handleLoad = async () => {
    try {
      const response1 = await fetch(`${host}/api/authentication/getalluser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json'
        }
      });
      const usersJson = await response1.json();
      console.log("Users Data: ", usersJson); // Debug: Log the users data

      const response2 = await fetch(`${host}/api/cartow/getallvehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json'
        }
      });
      const vehiclesJson = await response2.json();
      console.log("Vehicle Data: ", vehiclesJson); // Debug: Log the vehicle data

      setUsers(usersJson);
      setVehicleDetails(vehiclesJson);
    } catch (error) {
      console.error('Error fetching user or vehicle details:', error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // Find the user details by matching user_id
  const findUserById = (userId) => {
    console.log("Matching userId:", userId); // Debug: Log the userId being searched
    const user = users.find(user => user._id === userId); // Match by user_id
    console.log("Found User: ", user); // Debug: Log the found user or undefined if not found
    return user || {};
  };

  return (
    <>
      <div>
        {vehicleDetails.map((vehicleDet, index) => {
          const user = findUserById(vehicleDet.user_id); // Assuming each vehicle booking has a `user_id` field

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
                    <td>{user.username || 'Unknown'}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user.email || 'Unknown'}</td>
                  </tr>
                  <tr>
                    <td>Fullname</td>
                    <td>{user.fullname || 'Unknown'}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{user.contact_no || 'Unknown'}</td>
                  </tr>
                  <tr>
                    <td>DOB</td>
                    <td>{user.DOB || 'Unknown'}</td>
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
