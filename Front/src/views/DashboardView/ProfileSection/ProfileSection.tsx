import React, { useEffect, useState } from "react";

import { UserProfile } from "../../../types/types";
import { useAuth } from "../../../services/Api";
import ProfileCard from "./ProfileCard/ProfileCard";

const ProfileSection = () => {
  const { getCares } = useAuth();
  const [careProfiles, setCareProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    const fetchCares = async () => {
      try {
        const cares = await getCares();
        const userProfileCares = cares.map((care) => ({
          id: care.id,
          name: care.name,
          description: care.description,
          address: care.address,
          imageUrl: care.imageUrl,
        }));
        setCareProfiles(userProfileCares);
      } catch (error) {
        console.error("Error fetching cares:");
      }
    };

    fetchCares();
  }, [getCares]);

  return (
    <div>
      <h3 className="lg:text-4xl lg:mt-20 lg:-mb-10 mt-36 -mb-20 text-2xl uppercase font-semibold text-center">
        Perfiles cercanos
      </h3>
      <div className="lg:mt-16 mt-36 flex ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="lg:px-14 px-5 pt-2 2xl:container flex flex-wrap">
          {careProfiles.map((user) => (
            <div key={user.id} className="md:w-1/2 lg:w-1/3 p-4">
              <ProfileCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
