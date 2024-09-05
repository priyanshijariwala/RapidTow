import React from 'react'
import Image from 'react-bootstrap/Image';
import img_user from '../image/user.png';
import '../style.css';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const navigate = useNavigate()
    return (
        <>
            <div className="profile">
                <div className="profile-header">
                    <Image src={img_user} roundedCircle />
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