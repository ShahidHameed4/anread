import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faMapMarkerAlt,
  faBirthdayCake,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "./ProfileEditModal"; // Import your modal component here

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: "123 Main St, City, Country",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo sit amet est aliquam, et scelerisque nibh ullamcorper.",
    occupation: "Software Engineer",
    phone: "+1234567890",
  });

  // State variables for edited values
  const [editedUser, setEditedUser] = useState({});

  // State variables for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle editing user information
  const handleEdit = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  // Function to handle saving edited user information
  const handleSave = () => {
    // Call API to update user information with editedUser data
    console.log("Edited User:", editedUser);
    // Update user state with edited values
    setUser({ ...user, ...editedUser });
    // Close the modal
    setIsModalOpen(false);
  };

  // Function to open the edit modal
  const openEditModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-8 text-center font-pacifico">
        Welcome back, {user.name}!
      </h2>

      {/* User information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile picture */}
        <div className="bg-gray-200 p-6 shadow rounded-lg">
          <div className="flex justify-center mb-6">
            {/* Add your profile picture component here */}
            <img
              src="https://i.ibb.co/Pg8VLgK/super-cute-boys-ski-suits-are-ready-hit-slopes-have-blast-winter-wonderland-generative-ai.jpg"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 font-pacifico">
              Profile Picture
            </h3>
            <p className="text-gray-800">{user.name}</p>
          </div>
        </div>

        {/* User details */}
        <div className="bg-gray-200 p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4 font-pacifico">
            User Information
          </h3>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="text-gray-800 mr-2" />
            <p className="text-lg">{user.name}</p>
            <button onClick={openEditModal}>
              <FontAwesomeIcon icon={faEdit} className="ml-2 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-800 mr-2" />
            <p>{user.email}</p>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faBirthdayCake}
              className="text-gray-800 mr-2"
            />
            <p>{user.age} years old</p>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-800 mr-2"
            />
            <p>{user.address}</p>
          </div>
          <div>
            <p className="text-gray-700">{user.bio}</p>
          </div>
          <div className="flex items-center mb-4">
            <p>
              <strong>Occupation:</strong> {user.occupation}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      {isModalOpen && (
        <EditUserModal
          user={user}
          handleEdit={handleEdit}
          handleSave={handleSave}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfilePage;
