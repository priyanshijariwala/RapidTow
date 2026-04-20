import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import img_user from '../image/user.png';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/Helper';

function Profile() {
    const navigate = useNavigate();
    const token = localStorage.getItem("car_tow_token");
    const host = BASE_URL;

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [userImage, setUserImage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [userId, setUserId] = useState("")

    // ✅ Fetch user data
    const fetchUser = async () => {
        try {
            const res = await fetch(`${host}/api/authentication/getuser`, {
                method: "GET",
                headers: {
                    'car_tow_token': token
                }
            });

            const data = await res.json();
            setUserId(data._id); 

            if (data.image) {
                setUserImage(`http://localhost:5000/${data.image}`);
            }

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (token) {
            fetchUser();
        }
    }, []);

    // ✅ Handle file select
    const handleChange = (e) => {
        const selected = e.target.files[0];
        setFile(selected);

        if (selected) {
            setPreview(URL.createObjectURL(selected));
        }
    };

    // ✅ Upload image
    const handleUpload = async () => {
        if (!file) return alert("Select image first");

        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await fetch(`http://localhost:5000/api/authentication/uploadprofile/${userId}`, {
                method: "POST",
                headers: {
                    'car-tow-token': token
                },
                body: formData
            });

            const data = await res.json();

            setUserImage(`http://localhost:5000/${data.image}`);
            setPreview(null);

            // ✅ hide upload UI
            setIsEditing(false);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="profile">
                <div className="profile-header">

                    {/* ✅ Profile Image */}
                    <Image
                        src={
                            preview
                                ? preview
                                : userImage
                                    ? userImage
                                    : img_user
                        }
                        roundedCircle
                        width={120}
                        height={120}
                    />

                    {/* ✅ Edit Button */}
                    {token && !isEditing && (
                        <div className="mt-2">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        </div>
                    )}

                    {/* ✅ Upload Section */}
                    {token && isEditing && (
                        <div className="mt-2">
                            <input type="file" onChange={handleChange} />

                            <br />

                            <button
                                className="btn btn-primary mt-2"
                                onClick={handleUpload}
                            >
                                Upload
                            </button>

                            <button
                                className="btn btn-danger mt-2 ms-2"
                                onClick={() => {
                                    setIsEditing(false);
                                    setPreview(null);
                                    setFile(null);
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    )}

                </div>

                {token ? (
                    <div className='profile_nav text-white'>
                        <span onClick={() => navigate('/UserDetails')}>User Details</span>
                        <span onClick={() => navigate('/VehicleDetails')}>Vehicle Details</span>
                        <span onClick={() => navigate('/ChangePassword')}>Change Password</span>
                        <span onClick={() => navigate('/Help')}>Help</span>
                        <span onClick={() => navigate('/Feedback')}>Feedback</span>
                    </div>
                ) : (
                    <div className="login-required">
                        <p className='mt-4' style={{ color: "white" }}>
                            Login is required to access your profile details.
                        </p>
                        <button className="btn btn-primary" onClick={() => navigate('/SignIn')}>
                            Login
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Profile;