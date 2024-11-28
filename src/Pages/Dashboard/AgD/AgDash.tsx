{/* import React, { useEffect, useState } from "react";
import axios from "../../../../apiConfig";
import ProfilePictureUploader from "../../Dashboard/Profilepicture";
import { Collection, Agent } from "../../../data";

const AgentDashboard = () => {
  const [agentData, setAgentData] = useState<Agent | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  // const [schoolFields, setSchoolFields] = useState<Field[]>([]);
  const [newCollection, setNewCollection] = useState({ name: "" });
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);  // For handling errors

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await axios.get("/agent/profile");
        setAgentData(response.data);
        setCollections(response.data.collections || []);
        setError(null);  // Clear any previous error
      } catch (error) {
        console.error("Error fetching agent data:", error);
        setError("Could not fetch agent data.");
      }
    };

    // const fetchSchoolFields = async () => {
    //   try {
    //     const response = await axios.get("/fields");
    //     setSchoolFields(response.data);
    //   } catch (error) {
    //     console.error("Error fetching school fields:", error);
    //   }
    // };

    fetchAgentData();
    // fetchSchoolFields();
  }, []);

  const handleLogout = () => {
    // Handle the logout logic here (you can clear authentication tokens, etc.)
    console.log("Logging out...");
    // For now, just redirect to a login page or clear the session (you can adjust based on your auth logic)
    window.location.href = "/login";  // This will redirect to login page
  };

  const handleAddCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/agent/collections", newCollection);
      setCollections([...collections, response.data]);
      setNewCollection({ name: "" });
    } catch (error) {
      console.error("Error creating collection:", error);
    }
  };

  const handleAddFieldToCollection = async (fieldId: string) => {
    if (!selectedCollection) return;
    try {
      await axios.post(`/agent/collections/${selectedCollection}/fields`, { fieldId });
      alert("Field added to collection successfully!");
    } catch (error) {
      console.error("Error adding field to collection:", error);
    }
  };

  if (!agentData) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold text-green-600">Error: {error}</h2>
          <button
            onClick={handleLogout}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-md shadow-lg">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Welcome, {agentData.name}!</h2>
        </div>

        
        <ProfilePictureUploader
          initialProfilePicture={agentData.profilePicture || ""}
          userId={agentData.id}
        />
        <div className="mt-6">
          <p className="text-gray-600">Email: {agentData.email}</p>
          <p className="text-gray-600">Phone: {agentData.phoneNumber}</p>
          <p className="text-gray-600">Profile Type: {agentData.type}</p>
        </div>

        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Manage Collections</h3>

          
          <form onSubmit={handleAddCollection} className="mb-8">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Collection Name"
                value={newCollection.name}
                onChange={(e) => setNewCollection({ name: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                Add Collection
              </button>
            </div>
          </form>

          
          <div className="space-y-4">
            {collections.length > 0 ? (
              collections.map((collection) => (
                <div key={collection.id} className="p-4 border rounded bg-gray-50">
                  <h4 className="text-lg font-bold">{collection.name}</h4>
                  <p className="text-gray-500">{collection.fields.length} fields</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No collections created yet.</p>
            )}
          </div>
        </div>

        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Add Fields to Collections</h3>
          <select
            onChange={(e) => setSelectedCollection(e.target.value)}
            value={selectedCollection || ""}
            className="border p-2 rounded mb-4 w-full"
          >
            <option value="">Select Collection</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.name}
              </option>
            ))}
          </select>

          {/*<div className="grid grid-cols-1 gap-4">
            {schoolFields.map((field) => (
              <div key={field.id} className="p-4 border rounded bg-gray-50">
                <h4 className="text-lg font-bold">{field.name}</h4>
                <p>Location: {field.location}</p>
                <button
                  onClick={() => handleAddFieldToCollection(field.id)}
                  className="bg-blue-500 text-white py-1 px-4 rounded mt-2 hover:bg-blue-600 transition duration-200"
                >
                  Add to Collection
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentDashboard; */}

import { useEffect, useState } from "react";
import axios from "../../../../apiConfig";
import ProfilePictureUploader from "../../Dashboard/Profilepicture";
import { Agent } from "../../../data";

const AgentDashboard = () => {
  const [agentData, setAgentData] = useState<Agent | null>(null);
  const [error, setError] = useState<string | null>(null);  // For handling errors

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await axios.get("/agent/profile");
        setAgentData(response.data);
        setError(null);  // Clear any previous error
      } catch (error) {
        console.error("Error fetching agent data:", error);
        setError("Could not fetch agent data.");
      }
    };

    fetchAgentData();
  }, []);

  const handleLogout = () => {
    // Handle the logout logic here (clear authentication tokens, etc.)
    console.log("Logging out...");
    window.location.href = "/login";  // Redirect to login page
  };

  if (!agentData) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold text-green-600">Error: {error}</h2>
          <button
            onClick={handleLogout}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-md shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Welcome, {agentData.name}!</h2>
        </div>

        {/* Profile Section */}
        <ProfilePictureUploader
          initialProfilePicture={agentData.profilePicture || ""}
          userId={agentData.id}
        />
        <div className="mt-6">
          <p className="text-gray-600">Email: {agentData.email}</p>
          <p className="text-gray-600">Phone: {agentData.phoneNumber}</p>
          <p className="text-gray-600">Profile Type: {agentData.type}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AgentDashboard;

