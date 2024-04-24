import { Header } from "./Profile/Header";
import { PersonalInfo } from "./Profile/PersonalInfo";

const ProfileView = () => {
  return (
    <>
      <div className="h-full bg-gray-200 p-8 mt-10 sticky">
        <Header />
        <PersonalInfo />
      </div>
    </>
  );
};

export default ProfileView;
