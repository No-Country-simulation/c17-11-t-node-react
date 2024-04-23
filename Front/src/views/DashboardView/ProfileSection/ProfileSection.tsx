import { UserProfile } from "../../../types/types";
import ProfileCard from "./ProfileCard/ProfileCard";

const ProfileSection = () => {
  const user: UserProfile[] = [
    {
      id: 1,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Roberto Perez",
      description: "Recoleta - Buenos Aires",
      address: "Libre de 16hs a 21hs",
      imageUrl:
        "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="lg:mt-16 mt-36 flex ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="lg:px-14 px-5 pt-2 2xl:container flex flex-wrap">
        {user.map((user) => (
          <div key={user.id} className="md:w-1/2 lg:w-1/3 p-4">
            <ProfileCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
