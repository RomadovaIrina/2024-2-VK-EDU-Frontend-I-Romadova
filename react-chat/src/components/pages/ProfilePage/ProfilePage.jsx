import React, { useEffect, useState, useRef } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./ProfilePage.module.scss";
import DEFAULT_AVATAR from "../../../../public/temp.png"
import { getUser, saveUser } from "../../../api/users/users.js";
import EditInput from "../../EditInput/EditInput.jsx";

const ProfilePage = () => {
  const { chatId, userId } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [tempUser, setTempUser] = useState({});


  useEffect(() => {
    const savedUser = getUser(userId);
    if (savedUser) {
      setUser(savedUser);
      setTempUser(savedUser);
    }
  }, [userId]);

  const handleEdit = () => {
    if (isEditing) {
      setUser(tempUser);
      saveUser(userId, tempUser);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setTempUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <HeadBar
        userName={user?.name}
        leftPlace={
          <ArrowBackIcon
            className={styles.arrow}
            sx={{ fontSize: 40 }}
            onClick={() => navigate('/')} />
        }
        centerPlace={
          <div className={styles.userInfo}>
            <span className={styles.messenger}>{!isEditing ? user?.name : 'Edit the profile'}</span>
          </div>}
        rightPlace={
          isEditing ? (
            <CheckIcon onClick={handleEdit} style={{ cursor: 'pointer' }} />
          ) : (
            <EditIcon onClick={handleEdit} style={{ cursor: 'pointer' }} />
          )
        }
      />
      <main className={styles.profileContainer}>
        <div className={styles.profileContent}>

          <div className={styles.pictureContent}>
            <img src={user?.avatar || DEFAULT_AVATAR} className={styles.avatar} alt="avatar" />
            <div className={styles.cameraIcon}>
              <CameraAltIcon />
            </div>
          </div>

          <EditInput
            className={styles.editInputContainer} /* Добавьте этот класс к EditInput */
            labelName="Full name"
            value={tempUser?.name}
            onChange={value => handleChange('name', value)}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Username"
            value={`@${tempUser.username ?? ''}`}
            onChange={value => handleChange('username', value.replace('@', ''))}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Bio"
            value={tempUser?.description}
            onChange={value => handleChange('description', value)}
            readOnly={!isEditing}
          />

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
