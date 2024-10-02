import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Admin_Home() {
  const host = "http://localhost:5000";
  const [vehiclesWithUsers, setVehiclesWithUsers] = useState([]);

  console.log(vehiclesWithUsers);
  // Fetch vehicle and user data
  const handleLoad = async () => {
    try {
      // Fetch vehicle details
      const response2 = await fetch(`${host}/api/cartow/getallvehicle`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const vehiclesJson = await response2.json();

      // Fetch user details for each vehicle
      const vehiclesWithUserDetails = await Promise.all(
        vehiclesJson.map(async (vehicle) => {
          try {
            const response1 = await fetch(
              `${host}/api/authentication/getalluser/${vehicle.user}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "Application/json",
                },
              }
            );
            const userJson = await response1.json();

            // Return the vehicle with user details
            return {
              ...vehicle, // Spread vehicle details
              user: userJson, // Attach user details
            };
          } catch (error) {
            console.error(
              `Error fetching user for vehicle ${vehicle._id}:`,
              error
            );
            return { ...vehicle, user: null }; // Return vehicle without user details in case of error
          }
        })
      );

      setVehiclesWithUsers(vehiclesWithUserDetails);
    } catch (error) {
      console.error("Error fetching vehicle details:", error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <h3>Bookings</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {vehiclesWithUsers.map((vehicle, index) => (
          <div>

            <Table className="admintable me-4" key={vehicle._id}>
              <tbody>
                <tr>
                  <td>Status</td>
                  <td>{vehicle.status || "Unknown"}</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td>{vehicle._id}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{vehicle.user?.username || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{vehicle.user?.email || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Fullname</td>
                  <td>{vehicle.user?.fullname || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>{vehicle.user?.contact_no || "Unknown"}</td>
                </tr>
                <tr>
                  <td>DOB</td>
                  <td>{vehicle.user?.DOB || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Vehicle Model Name</td>
                  <td>{vehicle.vehicle_model_name || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Vehicle Company Name</td>
                  <td>{vehicle.vehicle_company_name || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Vehicle Number</td>
                  <td>{vehicle.vehicle_number || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Old Destination</td>
                  <td>{vehicle.old_destination || "Unknown"}</td>
                </tr>
                <tr>
                  <td>New Destination</td>
                  <td>{vehicle.new_destination || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Payment Mode</td>
                  <td>{vehicle.payment_mode || "Unknown"}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin_Home;
