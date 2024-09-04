import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'

function Admin_Home() {
    const host = "http://localhost:5000";

  const [userDet, setUserDet] = useState({
    username: '',
    email: '',
    fullname:'',
    contact_no:'',
    DOB:''
  });
  const [vehicleDet, setVehicleDet] = useState({
    vehicle_model_name: '',
    vehicle_company_name: '',
    vehicle_number: '',
    old_destination:'',
    new_destination:'',
    payment_mode:'',
    status:'',
  })

  // Get data
  const handleLoad = async () => {
    try {
      const response1 = await fetch(`${host}/api/authentication/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json1 = await response1.json();
      console.log(json1);

      const response2 = await fetch(`${host}/api/cartow/fetchallvehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json2 = await response2.json();
      console.log(json2);

      setUserDet(json1);
      setVehicleDet(json2[json2.length-1]);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);
    return (
        <>
            <div>
                <div>
                    <Table striped bordered hover >
                        {/* <thead>
                            <tr>
                                <th>#</th>
                                <th>Process</th>
                                <th>Finish</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Fullname</th>
                                <th>Contact</th>
                                <th>DOB</th>
                                <th>Vehicle_Model_Name</th>
                                <th>Vehicle_Company_Name</th>
                                <th>Vehicle_number</th>
                                <th>Payment_mode</th>
                                <th>Old_Destination</th>
                                <th>New_Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                /></td>
                                <td><Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                /></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody> */}
                        <tr>
                            <td>Status</td>
                            <td>{vehicleDet.status}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{userDet.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{userDet.email}</td>
                        </tr>
                        <tr>
                            <td>Fullname</td>
                            <td>{userDet.fullname}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{userDet.contact_no}</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>{userDet.DOB}</td>
                        </tr>
                        <tr>
                            <td>Vehicle_Model_Name</td>
                            <td>{vehicleDet.vehicle_model_name}</td>
                        </tr>
                        <tr>
                            <td>Vehicle_Company_Name</td>
                            <td>{vehicleDet.vehicle_company_name}</td>
                        </tr>
                        <tr>
                            <td>Vehicle_number</td>
                            <td>{vehicleDet.vehicle_number}</td>
                        </tr>
                        <tr>
                            <td>Old_destination</td>
                            <td>{vehicleDet.old_destination}</td>
                        </tr>
                        <tr>
                            <td>New_Destination</td>
                            <td>{vehicleDet.new_destination}</td>
                        </tr>
                        <tr>
                            <td>Payment_mode</td>
                            <td>{vehicleDet.payment_mode}</td>
                        </tr>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Admin_Home