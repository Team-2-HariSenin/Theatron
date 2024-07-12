import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

const Profile = () => {
  const { token } = useAuthStore((state) => state);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [editable, setEditable] = useState({
    name: false,
    email: false,
  });

  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [notification, setNotification] = useState("");

  const getProfile = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData({
        ...profileData,
        name: response.data.name,
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const updateProfile = async (field) => {
    if (
      field === "password" &&
      profileData.newPassword !== profileData.confirmPassword
    ) {
      setNotification("Passwords do not match!");
      return;
    }

    try {
      const { newPassword, confirmPassword, ...updateData } = profileData;
      if (field === "password" && newPassword) {
        updateData.password = newPassword;
      }

      await axios.put(`http://127.0.0.1:3000/api/user`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (field === "name" || field === "email") {
        setNotification(
          `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`,
        );
      } else if (field === "password") {
        setNotification("Password updated successfully");
        setProfileData({
          ...profileData,
          newPassword: "",
          confirmPassword: "",
        });
      }

      setEditable({ ...editable, [field]: false });
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      setNotification(`Failed to update ${field}`);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const toggleEdit = (field) => {
    if (editable[field]) {
      updateProfile(field);
    } else {
      setEditable({ ...editable, [field]: !editable[field] });
    }
  };

  const handlePasswordUpdate = () => {
    updateProfile("password");
  };

  const toggleShowPassword = (field) => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };

  return (
    <div className="mx-auto flex w-full flex-col py-5 lg:container">
      <div className="relative mb-8 w-full align-baseline text-xl font-semibold leading-[1.2em] tracking-[0.0125em] text-white">
        <h3 className="m-h-[2.4em] relative flex items-center gap-2 overflow-hidden pl-3 text-2xl leading-[29px] text-white sm:text-4xl">
          <span>
            <svg
              className="h-6 w-1 fill-yellow sm:h-7"
              viewBox="0 0 4 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="4" height="28" rx="2" fill="rgba(245, 197, 24, 1)" />
            </svg>
          </span>{" "}
          Your Profile
        </h3>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 px-4"
      >
        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              readOnly={!editable.name}
              className={`rounded bg-black-20 px-4 py-2 text-white ${!editable.name ? "cursor-not-allowed" : ""}`}
            />
            <button
              type="button"
              onClick={() => toggleEdit("name")}
              className="rounded bg-yellow px-4 py-2 font-semibold text-black"
            >
              {editable.name ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              readOnly={!editable.email}
              className={`rounded bg-black-20 px-4 py-2 text-white ${!editable.email ? "cursor-not-allowed" : ""}`}
            />
            <button
              type="button"
              onClick={() => toggleEdit("email")}
              className="rounded bg-yellow px-4 py-2 font-semibold text-black"
            >
              {editable.email ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPasswords.newPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={profileData.newPassword}
              onChange={handleChange}
              className="w-full rounded bg-black-20 px-4 py-2 text-white"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => toggleShowPassword("newPassword")}
              className="absolute right-2 rounded bg-yellow px-2 py-1 text-black"
            >
              {showPasswords.newPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPasswords.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={profileData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded bg-black-20 px-4 py-2 text-white"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => toggleShowPassword("confirmPassword")}
              className="absolute right-2 rounded bg-yellow px-2 py-1 text-black"
            >
              {showPasswords.confirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {profileData.newPassword && profileData.confirmPassword && (
            <p
              className={`text-sm ${profileData.newPassword === profileData.confirmPassword ? "text-green" : "text-red"}`}
            >
              {profileData.newPassword === profileData.confirmPassword
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handlePasswordUpdate}
          className="rounded bg-yellow px-4 py-2 font-semibold text-black"
        >
          Update Password
        </button>

        {notification && (
          <p
            className={`mt-4 text-center text-sm ${notification.includes("successfully") ? "text-green" : "text-red"}`}
          >
            {notification}
          </p>
        )}
      </form>
    </div>
  );
};

export default Profile;
