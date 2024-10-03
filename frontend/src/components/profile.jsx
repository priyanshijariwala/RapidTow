import React from 'react'
import Image from 'react-bootstrap/Image';
import img_user from '../image/user.png';
import '../style.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const str = localStorage.getItem("car_tow_token");

    return (
        <>
            <div className="profile">
                <div className="profile-header">
                    <Image src={img_user} roundedCircle />
                </div>

                {str ? (
                    <div className='profile_nav text-white'>
                        <span onClick={() => navigate('/UserDetails')}>User Details</span>
                        <span onClick={() => navigate('/VehicleDetails')}>Vehicle Details</span>
                        <span onClick={() => navigate('/ChangePassword')}>Change Password</span>
                        <span onClick={() => navigate('/Help')}>Help</span>
                        <span onClick={() => navigate('/Feedback')}>Feedback</span>
                    </div>
                ) : (
                    <div className="login-required">
                        <p className='mt-4' style={{color : "white"}}>Login is required to access your profile details.</p>
                        <button className="btn btn-primary" onClick={() => navigate('/SignIn')}>Login</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Profile;
