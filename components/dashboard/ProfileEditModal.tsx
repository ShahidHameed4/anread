import { useState } from 'react';

const EditUserModal = ({ user, handleEdit, handleSave, closeModal }) => {
  // State variables for edited values in the modal
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedAge, setEditedAge] = useState(user.age);
  const [editedAddress, setEditedAddress] = useState(user.address);
  const [editedBio, setEditedBio] = useState(user.bio);
  const [editedOccupation, setEditedOccupation] = useState(user.occupation);
  const [editedPhone, setEditedPhone] = useState(user.phone);

  // Function to handle saving edited user information in the modal
  const handleSaveModal = () => {
    handleEdit('name', editedName);
    handleEdit('email', editedEmail);
    handleEdit('age', editedAge);
    handleEdit('address', editedAddress);
    handleEdit('bio', editedBio);
    handleEdit('occupation', editedOccupation);
    handleEdit('phone', editedPhone);
    handleSave();
  };

  return (
    <div className="fixed top-10 left-0 w-full h-3/4 flex justify-center items-center">
      {/* Backdrop for the rest of the screen */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="bg-white rounded-lg p-6 max-w-screen-md w-full h-auto overflow-x-auto shadow-md relative z-10">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Age:</label>
            <input type="text" value={editedAge} onChange={(e) => setEditedAge(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address:</label>
            <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Occupation:</label>
            <input type="text" value={editedOccupation} onChange={(e) => setEditedOccupation(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone:</label>
            <input type="text" value={editedPhone} onChange={(e) => setEditedPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block mb-1">Bio:</label>
            <textarea value={editedBio} onChange={(e) => setEditedBio(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" rows="4"></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={handleSaveModal} className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2">Save</button>
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
