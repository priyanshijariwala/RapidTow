import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BASE_URL } from "../Services/Helper";
import "./adminstyle.css";  // Custom CSS file

function Admin_Home() {
  const host = BASE_URL;
  const [vehiclesWithUsers, setVehiclesWithUsers] = useState([]);

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

  // Separate vehicles by status
  const activeVehicles = vehiclesWithUsers.filter(
    (vehicle) => vehicle.status === "Active"
  );
  const finishedVehicles = vehiclesWithUsers.filter(
    (vehicle) => vehicle.status === "Finish"
  );

  const renderVehicleTable = (vehicles) =>
    vehicles.map((vehicle) => (
      <Table className="admintable" key={vehicle._id} striped bordered hover>
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
    ));

  const renderFinishVehicleTable = (vehicles) =>
    vehicles.map((vehicle) => (
      <Table className="admintable" key={vehicle._id} striped bordered hover>
        <tbody>
          <tr>
            <td>Status</td>
            <td>{vehicle.status || "Unknown"}</td>
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
            <td>Vehicle Model Name</td>
            <td>{vehicle.vehicle_model_name || "Unknown"}</td>
          </tr>
          <tr>
            <td>Vehicle Number</td>
            <td>{vehicle.vehicle_number || "Unknown"}</td>
          </tr>
          <tr>
            <td>Payment Mode</td>
            <td>{vehicle.payment_mode || "Unknown"}</td>
          </tr>
        </tbody>
      </Table>
    ));

  return (
    <div className="admin-home">
      <h3 className="section-title">Bookings Overview</h3>
      <div className="vehicle-sections">
        {/* Active Vehicles Section */}
        <div className="vehicle-section">
          <h4 className="subsection-title">Active Vehicles</h4>
          {activeVehicles.length > 0 ? (
            renderVehicleTable(activeVehicles)
          ) : (
            <p className="no-vehicles">No active vehicles.</p>
          )}
        </div>

        {/* Finished Vehicles Section */}
        <div className="vehicle-section">
          <h4 className="subsection-title">Finished Vehicles</h4>
          {finishedVehicles.length > 0 ? (
            renderFinishVehicleTable(finishedVehicles)
          ) : (
            <p className="no-vehicles">No finished vehicles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin_Home;
