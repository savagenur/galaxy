import React, {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil } from "lucide-react";
interface ProfileModalProps {
  setShowEdit: Dispatch<SetStateAction<boolean>>;
}
const ProfileModal = ({ setShowEdit }: ProfileModalProps) => {
  const user = dummyUserData;
  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null as File | null,
    cover_photo: null as File | null,
    full_name: user.full_name,
  });
  const handleSaveProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 z-110 h-screen overflow-y-scroll bg-black/50 ">
      <div className="max-w-2xl sm:py-6 mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>
          <form className="space-y-4" onSubmit={handleSaveProfile}>
            {/* Profile Picture */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      profile_picture: e.target.files
                        ? e.target.files[0]
                        : null,
                    })
                  }
                />
                <div className="group/profile relative cursor-pointer">
                  <img
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    className="w-24 h-24 rounded-full object-cover mt-2"
                    alt=""
                  />
                  <div className="absolute hidden group-hover/profile:flex inset-0 bg-black/20 rounded-full items-center justify-center">
                    <Pencil className="w-5 h-5 text-white " />
                  </div>
                </div>
              </label>
            </div>
            {/* Cover photo */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="cover_photo"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      cover_photo: e.target.files ? e.target.files[0] : null,
                    })
                  }
                />
                <div className="relative group/cover">
                  <img
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    className="w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2"
                    alt=""
                  />
                  <div className="absolute hidden group-hover/cover:flex inset-0 bg-black/20 rounded-lg items-center justify-center cursor-pointer">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>
            {/* Full name field */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your full name"
                onChange={(e) =>
                  setEditForm({ ...editForm, full_name: e.target.value })
                }
                value={editForm.full_name}
              />
            </div>
            {/* Username field */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your username"
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
                value={editForm.username}
              />
            </div>

            {/* Bio field */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bio
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your bio"
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
                value={editForm.bio}
              />
            </div>

            {/* Location field */}
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Please enter your location"
                onChange={(e) =>
                  setEditForm({ ...editForm, location: e.target.value })
                }
                value={editForm.location}
              />
            </div>
            <div className="flex justify-end space-x-3 pt-6">
              <button
                onClick={() => setShowEdit(false)}
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEdit(false)}
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
