import React from "react";
import { UserProfile } from "../../../../types/types";

interface ProfileCardProps {
  user: UserProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const { last_name, first_name, description, address, imageUrl, time } = user;

  return (
    <div className="flex flex-col justify-between h-[26rem] lg:w-[16rem] w-full py-8 px-6 space-y-6 rounded-lg border border-gray-200 shadow-lg bg-white text-center">
      <img
        alt="profilePic"
        className="w-32 h-32 mx-auto mb-8 object-cover rounded-full border-2 border-gray-200 bg-gray-100"
        src={imageUrl}
      />
      <div>
        <h5 className="text-xl text-gray-600">
          {first_name} {last_name}
        </h5>
        <div className="mt-0">
          <h3 className="text-md font-bold text-gray-700">{address}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <span className="block text-gray-800 text-sm">{time}</span>
      </div>
      <a
        href="/profile"
        className="bg-[#F97D05] hover:bg-[#a5703c] text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Leer más
      </a>
    </div>
  );
};

export default ProfileCard;
