import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks";

const Profile = () => {
  const { user, setUser, handleUpdateProfile } = useAuth();
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await handleUpdateProfile({
        displayName: name,
        photoURL,
      });
      setUser({
        ...user,
        displayName: name,
        photoURL,
      });
      Swal.fire("Success", "Profile Updated Successfully", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
      setName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Display Profile Section */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col items-center">
          <img
            src={photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-secondary object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        </div>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          Update Profile
        </h3>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Photo URL
          </label>
          <input
            id="photoURL"
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full btn bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
