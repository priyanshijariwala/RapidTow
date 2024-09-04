import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'

function Admin_Home() {
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
                            <td>Process</td>
                            <td><Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                /></td>
                        </tr>
                        <tr>
                            <td>Finish</td>
                            <td><Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                /></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Fullname</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Vehicle_Model_Name</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Vehicle_Company_Name</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Vehicle_number</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Old_destination</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>New_Destination</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Payment_mode</td>
                            <td></td>
                        </tr>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Admin_Home