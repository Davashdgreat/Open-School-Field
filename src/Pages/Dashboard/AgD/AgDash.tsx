// import React, { useEffect, useState } from "react";
// import axios from "../../../../apiConfig";
// import ProfilePictureUploader from "../../Dashboard/Profilepicture";
// import { Field, Collection, Agent } from "../../../data";

// const AgentDashboard = () => {
//   const [agentData, setAgentData] = useState<Agent | null>(null);
//   const [collections, setCollections] = useState<Collection[]>([]);
//   const [schoolFields, setSchoolFields] = useState<Field[]>([]);
//   const [newCollection, setNewCollection] = useState({ name: "" });
//   const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch agent profile data
//     const fetchAgentData = async () => {
//       try {
//         const response = await axios.get("/agent/profile");
//         setAgentData(response.data);
//         setCollections(response.data.collections || []);
//       } catch (error) {
//         console.error("Error fetching agent data:", error);
//       }
//     };

//     // Fetch all fields uploaded by schools
//     const fetchSchoolFields = async () => {
//       try {
//         const response = await axios.get("/fields");
//         setSchoolFields(response.data);
//       } catch (error) {
//         console.error("Error fetching school fields:", error);
//       }
//     };

//     fetchAgentData();
//     fetchSchoolFields();
//   }, []);

//   // Handle adding a new collection
//   const handleAddCollection = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/agent/collections", newCollection);
//       setCollections([...collections, response.data]);
//       setNewCollection({ name: "" });
//     } catch (error) {
//       console.error("Error creating collection:", error);
//     }
//   };

//   // Handle adding a field to a collection
//   const handleAddFieldToCollection = async (fieldId: string) => {
//     if (!selectedCollection) return;
//     try {
//       await axios.post(`/agent/collections/${selectedCollection}/fields`, { fieldId });
//       alert("Field added to collection successfully!");
//     } catch (error) {
//       console.error("Error adding field to collection:", error);
//     }
//   };

//   if (!agentData) return <div>Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="container mx-auto max-w-4xl bg-white p-8 rounded-md shadow-lg">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Welcome, {agentData.name}!</h2>
//         </div>

//         {/* Profile Section */}
//         <ProfilePictureUploader
//           initialProfilePicture={agentData.profilePicture || ""}
//           userId={agentData.id}
//         />
//         <div className="mt-6">
//           <p className="text-gray-600">Email: {agentData.email}</p>
//           <p className="text-gray-600">Phone: {agentData.phoneNumber}</p>
//           <p className="text-gray-600">Profile Type: {agentData.type}</p>
//         </div>

//         {/* Collections Management Section */}
//         <div className="mt-10">
//           <h3 className="text-xl font-semibold mb-4">Manage Collections</h3>

//           {/* Add New Collection Form */}
//           <form onSubmit={handleAddCollection} className="mb-8">
//             <div className="flex items-center gap-4">
//               <input
//                 type="text"
//                 placeholder="Collection Name"
//                 value={newCollection.name}
//                 onChange={(e) => setNewCollection({ name: e.target.value })}
//                 className="border p-2 rounded w-full"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
//               >
//                 Add Collection
//               </button>
//             </div>
//           </form>

//           {/* List of Collections */}
//           <div className="space-y-4">
//             {collections.length > 0 ? (
//               collections.map((collection) => (
//                 <div key={collection.id} className="p-4 border rounded bg-gray-50">
//                   <h4 className="text-lg font-bold">{collection.name}</h4>
//                   <p className="text-gray-500">{collection.fields.length} fields</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">No collections created yet.</p>
//             )}
//           </div>
//         </div>

//         {/* Add Fields to Collections */}
//         <div className="mt-10">
//           <h3 className="text-xl font-semibold mb-4">Add Fields to Collections</h3>
//           <select
//             onChange={(e) => setSelectedCollection(e.target.value)}
//             value={selectedCollection || ""}
//             className="border p-2 rounded mb-4 w-full"
//           >
//             <option value="">Select Collection</option>
//             {collections.map((collection) => (
//               <option key={collection.id} value={collection.id}>
//                 {collection.name}
//               </option>
//             ))}
//           </select>

//           <div className="grid grid-cols-1 gap-4">
//             {schoolFields.map((field) => (
//               <div key={field.id} className="p-4 border rounded bg-gray-50">
//                 <h4 className="text-lg font-bold">{field.name}</h4>
//                 <p>Location: {field.location}</p>
//                 <button
//                   onClick={() => handleAddFieldToCollection(field.id)}
//                   className="bg-blue-500 text-white py-1 px-4 rounded mt-2 hover:bg-blue-600 transition duration-200"
//                 >
//                   Add to Collection
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgentDashboard;

import React from 'react';

interface Field {
  id: string;
  name: string;
  location: string;
}

interface Collection {
  id: string;
  name: string;
  fields: Field[];
}

interface Agent {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
  type: string;
  collections: Collection[];
}

const hardcodedAgent: Agent = {
  id: "agent123",
  name: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "123-456-7890",
  profilePicture: "", // Leave empty to display default profile picture
  type: "Agent",
  collections: [
    {
      id: "collection1",
      name: "Summer Collection",
      fields: [
        { id: "field1", name: "Greenfield Stadium", location: "Downtown" },
        { id: "field2", name: "Bluefield Arena", location: "Uptown" },
      ],
    },
    {
      id: "collection2",
      name: "Winter Collection",
      fields: [{ id: "field3", name: "Redfield Park", location: "Midtown" }],
    },
  ],
};

const AgentDashboard: React.FC = () => {
  const { name, email, phoneNumber, profilePicture, collections } = hardcodedAgent;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        {/* Agent Information Section */}
        <div className="flex items-center mb-6">
          <img
            src={profilePicture || "/default-profile.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{phoneNumber}</p>
          </div>
        </div>

        {/* Collections Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Collections</h3>
          {collections.map((collection: Collection) => (
            <div key={collection.id} className="mb-6">
              <h4 className="text-lg font-bold mb-2">{collection.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {collection.fields.map((field: Field) => (
                  <div
                    key={field.id}
                    className="bg-gray-200 p-4 rounded-md shadow-sm"
                  >
                    <h5 className="font-semibold">{field.name}</h5>
                    <p className="text-gray-500">{field.location}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add New Field Button (Static) */}
        <div className="mt-6">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
            Add New Field to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
