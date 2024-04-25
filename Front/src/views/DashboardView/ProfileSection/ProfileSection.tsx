import { user } from "../../../services/fakeAPI";
import ProfileCard from "./ProfileCard/ProfileCard";

const ProfileSection = () => {
  // const { fetchPendingCares } = useAuth();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchPendingCares();
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h3 className="lg:text-4xl lg:mt-20 lg:-mb-10  mt-36 -mb-20 text-2xl uppercase font-semibold  text-center">
        Perfiles cercanos
      </h3>
      <div className="lg:mt-16 mt-36 flex ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="lg:px-14 px-5 pt-2 2xl:container flex flex-wrap">
          {user.map((user) => (
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
