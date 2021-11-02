import React from 'react';
import './profileImage.css';


const ProfileImage = ({ image, name, textColor})=> {
    return (
        <div className="profile-container">
            <div className="profile-overlay"></div>
            <img className="profile-image" src={image} alt="profile" />
            <p className="profile-name" style={{ color: textColor}}>{name}</p>
        </div>
    );
}

export default ProfileImage;
