import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../../apiConfig';
import ProfilePictureUploader from './Profilepicture';
import { User } from '../../data';
import Navbar from '../../components/Navbar';
import Header from './Dhead';


const UserDashboard: React.FC = () => {

  const [userData, setUserData] = useState<User |null>(null);
  const navigate = useNavigate()

  useEffect(() => {

    //Login Check
    const token = localStorage.getItem('token')

    if (!token) {
      navigate("/Login");
      return; // Exit early if not authenticated
    }

      // Fetch user data on component load
    const fetchUserData = async () => {

      try {
        const response = await axios.get("/user/profile"); // Adjust URL as needed
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Adjust based on your storage key
    navigate("/login");
  };

  if (!userData) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100">

        <Header /> 

          <div className="min-h-screen bg-gray-100 p-4">

            <div className="container mx-auto max-w-4xl">
              {/* <!-- Header --> */}
                <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-6">

                  <div className="container mx-auto max-w-3xl bg-white p-6 rounded-md shadow-lg">

                    <div className="mb-6">
                      <ProfilePictureUploader
                        initialProfilePicture={userData.profilePicture || ""}
                        userId={userData.id}
                      />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{userData.name}</h2>
                      <p className="text-gray-600">{userData.email}</p>
                      <p className="text-gray-600">Phone: {userData.phoneNumber}</p>
                      <p className="text-gray-600">Profile Type: {userData.type}</p>
                    </div>
                  </div>

                  <button className="text-blue-500">Logout</button>

                </div>

                <div className="bg-white p-6 shadow-md rounded-md">

                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Navigation</h3>

                  <div className="flex space-x-4">

                    <button className="w-1/3 bg-blue-500 text-white py-2 rounded-md">Schools</button>
                    <button className="w-1/3 bg-green-500 text-white py-2 rounded-md">Fields</button>
                    <button className="w-1/3 bg-purple-500 text-white py-2 rounded-md">Agents</button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                      >
                          Logout
                      </button>

                  </div>

                </div>

            </div>

        </div>

      </div>
    </>
  );
};

export default UserDashboard;
