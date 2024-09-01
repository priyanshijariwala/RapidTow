import React from 'react'
import Image from 'react-bootstrap/Image';
import img_user from '../image/user.png';
import '../style.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import UserDetails from './UserDetails';
import VehicleDetails from './VehicleDetails';
import ChangePassword from './ChangePassword';
import Help from './Help';
import Feedback from './Feedback';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const navigate = useNavigate()
    return (
        <>
            profile
            <div className="profile">
                <div className="profile-header">
                    <Image src={img_user} roundedCircle />
                    <h2>User Profile</h2>
                </div>

                <div className='profile_nav text-white'>
                    <span onClick={() => navigate('/UserDetails')}>User Details</span>
                    <span onClick={() => navigate('/VehicleDetails')}>Vehicle Details</span>
                    <span onClick={() => navigate('/ChangePassword')}>Change Password</span>
                    <span onClick={() => navigate('/Help')}>Help</span>
                    <span onClick={() => navigate('/Feedback')}>Feedback</span>
                </div>
                
            </div>

        </>
    )
}

export default Profile