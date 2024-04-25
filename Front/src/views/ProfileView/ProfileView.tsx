import { Header } from "./Profile/Header";
import { PersonalInfo } from "./Profile/PersonalInfo";
import { Photos } from "./Profile/Photos";
import { Review } from "./Profile/Review";
import { ServicesInfo } from "./Profile/ServicesInfo";

const ProfileView = () => {
  return (
    <>
      <div className="h-full bg-gray-200 p-8 mt-10 sticky ">
        <Header />
        <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">

          <PersonalInfo />
          <div className="grid grid-cols-1">
              <Photos/>
              <Review />
          </div>
          <ServicesInfo />
        </div>

      </div>
    </>
  );
};

export default ProfileView;
