import React, { useEffect, useState, useRef } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./ProfilePage.module.scss";
import DEFAULT_AVATAR from "../../../../public/temp.png"
import { getUser, saveUser } from "../../../apiService/users/users.js";
import EditInput from "../../EditInput/EditInput.jsx";

const ProfilePage = () => {
  const {userId } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editingUser, setEditingUser] = useState({
    name: "Пользователь",
    username: "username",
    description: "Напишите немного о себе",
    avatar: DEFAULT_AVATAR
  });

  const makeChangeHandle = (feildParam) => (value) => handleChange(feildParam, value);

  useEffect(() => {
    const savedUser = getUser(userId);
    if (savedUser) {
      setUser(savedUser);
      setEditingUser(savedUser);
    }
  }, [userId]);

  const handleEdit = () => {
    if (isEditing) {
      setUser(editingUser);
      saveUser(userId, editingUser);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setEditingUser((prev) => ({ ...prev, [field]: value }));
  };

  const userPic = user?.avatar || DEFAULT_AVATAR;
  const headerName = !isEditing ? user?.name : 'Edit the profile';
  const handleNavigate = () => navigate('/');

  return (
    <div>
      <HeadBar
        userName={user?.name}
        leftPlace={
          <ArrowBackIcon
            className={styles.arrow}
            sx={{ fontSize: 40 }}
            onClick={handleNavigate} />
        }
        centerPlace={
          <div className={styles.userInfo}>
            <span className={styles.messenger}>{headerName}</span>
          </div>}
        rightPlace={
          isEditing ? (
            <CheckIcon className = {styles.checkIcon} onClick={handleEdit} />
          ) : (
            <EditIcon className = {styles.editIcon} onClick={handleEdit} />
          )
        }
      />
      <main>
        <div className={styles.profileContent}>

          <div className={styles.pictureContent}>
            <img src={userPic} className={styles.avatar} alt="avatar" />
            <div className={styles.cameraIcon}>
              <CameraAltIcon />
            </div>
          </div>

          <EditInput
            className={styles.editInputContainer}
            labelName="Full name"
            value={editingUser?.name}
            onChange={makeChangeHandle('name')}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Username"
            value={`@${editingUser.username ?? ''}`}
            onChange={makeChangeHandle('username')}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Bio"
            value={editingUser?.description}
            onChange={makeChangeHandle('description')}
            readOnly={!isEditing}
          />

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
