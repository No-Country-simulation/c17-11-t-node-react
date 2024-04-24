import HeroComponent from "./Hero/HeroComponent";
import AboutComponent from "./About/About";
import ExperiencesComponent from "./Experiences/ExperiencesComponent";
import ContactComponent from "./Contact/ContactComponent";

const IndexView = () => {
  return (
    <div className=" ">
      <HeroComponent
        title="MascoCuidado"
        description="Te ayudamos a encontrar el mejor cuidado para tu mascota"
      />
      <AboutComponent />
      <ExperiencesComponent />
      <ContactComponent />
    </div>
  );
};

export default IndexView;
