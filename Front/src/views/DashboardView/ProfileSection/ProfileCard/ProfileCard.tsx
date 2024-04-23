import React from "react";
import { UserProfile } from "../../../../types/types";

interface ProfileCardProps {
  user: UserProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const { name, description, address, imageUrl } = user;

  return (
    <div className="flex flex-col justify-between h-[26rem] w-[16rem] py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white text-center">
      <img
        alt="profilePic"
        className="w-32 h-32 mx-auto mb-8 object-cover rounded-full border-2 border-gray-200 bg-gray-100"
        src={imageUrl}
      />
      <div>
        <h5 className="text-xl text-gray-600">{name}</h5>
        <div className="mt-2">
          <h3 className="text-1xl font-bold text-gray-700">{description}</h3>
          <p className="text-gray-500">{address}</p>
        </div>
        <span className="block text-gray-500">Libre de 16hs a 21hs</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Contactar
      </button>
    </div>
  );
};

export default ProfileCard;
