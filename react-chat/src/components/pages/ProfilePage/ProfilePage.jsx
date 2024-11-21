
import React, { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useNavigate } from 'react-router-dom';
import styles from "./ProfilePage.module.scss";
import DEFAULT_AVATAR from "../../../../public/temp.png"
import { getCurrentUser, updateUser } from "../../../service/usersService.js";
import EditInput from "../../EditInput/EditInput.jsx";
import { ROUTES } from "../../../routes.js";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editingUser, setEditingUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    bio: "Расскажите о себе",
    avatar: DEFAULT_AVATAR
  });

  const makeChangeHandle = (fieldParam) => (value) => handleChange(fieldParam, value);

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setEditingUser({
          first_name: currentUser.first_name || "",
          last_name: currentUser.last_name || "",
          username: currentUser.username || "",
          bio: currentUser.bio || "",
          avatar: currentUser.avatar || DEFAULT_AVATAR
        });
      }
    };
    loadUser();
  }, []);

  const handleEdit = async () => {
    if (isEditing) {
      try {
        const updatedUser = await updateUser(editingUser);
        setUser(updatedUser);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setEditingUser((prev) => ({ ...prev, [field]: value }));
  };

  const userPic = editingUser.avatar;
  const headerName = isEditing ? "Edit the profile" : user?.first_name;

  const handleNavigate = () => navigate(ROUTES.ROOT);

  return (
    <div>
      <HeadBar
        userName={headerName}
        leftPlace={
          <ArrowBackIcon
            className={styles.arrow}
            sx={{ fontSize: 40 }}
            onClick={handleNavigate}
          />
        }
        centerPlace={
          <div className={styles.userInfo}>
            <span className={styles.messenger}>{headerName}</span>
          </div>
        }
        rightPlace={
          isEditing ? (
            <CheckIcon className={styles.checkIcon} onClick={handleEdit} />
          ) : (
            <EditIcon className={styles.editIcon} sx={{ fontSize: 40 }} onClick={handleEdit} />
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
            labelName="First Name"
            value={editingUser.first_name}
            onChange={makeChangeHandle('first_name')}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Last Name"
            value={editingUser.last_name}
            onChange={makeChangeHandle('last_name')}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Username"
            value={`${editingUser.username}`}
            onChange={makeChangeHandle('username')}
            readOnly={!isEditing}
          />

          <EditInput
            className={styles.editInputContainer}
            labelName="Bio"
            value={editingUser.bio}
            onChange={makeChangeHandle('bio')}
            readOnly={!isEditing}
          />

        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
