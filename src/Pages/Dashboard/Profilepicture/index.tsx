import React, { useState } from "react";
import axios from "../../../../apiConfig"



interface ProfilePictureUploaderProps {
  initialProfilePicture: string;
  userId: string;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({
  initialProfilePicture,
  userId,
}) => {
  const [profilePicture, setProfilePicture] = useState(initialProfilePicture);
  const [uploading, setUploading] = useState(false);

  const handleProfilePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePicture", file);
      setUploading(true);

      try {
        const response = await axios.post(`/user/${userId}/upload-profile-picture`, formData);
        setProfilePicture(response.data.profilePicture);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={profilePicture || "default-profile.jpg"}
        alt="Profile"
        className="w-20 h-20 rounded-full border mb-4"
      />
      <input
        type="file"
        onChange={handleProfilePictureChange}
        className="text-gray-600"
      />
      {uploading && <p className="text-blue-500 mt-2">Uploading...</p>}
    </div>
  );
};

export default ProfilePictureUploader;
