import React from "react";

interface AppDetail {
  imageSrc: string;
  description: string;
}

const appDetails: AppDetail[] = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "MascoCuidado busca acercar Dueños de Mascotas a Cuidadores expertos, además de la ofrecerte la posibilidad de conocer al cuidador antes de elegirlo, te brindamos una lista de los mejores puntuados. ",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sabemos que no le confiarías tu mejor amigo a cualquier persona, por eso mismo te ayudamos a elegir quien mejor se adecue a tus necesidades, tiempos y sea el indicado para este gran trabajo.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1545529468-42764ef8c85f?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Registrate, entra y elige tu cuidador ideal. Pueden ponerse de acuerdo, y llegar a colaborar en esta labor, También puedes dejar una reseña de la persona, para ayudar a otros dueños a encontrarlo.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section
      className="bg-[#90A4AE] body-font lg:h-screen h-full w-full"
      id="nosotros"
    >
      <div className="container px-5 py-16 mx-auto">
        <h3 className="text-center text-[#010101] lg:text-4xl text-2xl uppercase font-bold lg:mt-8 mb-16">
          Acerca de MascoCuidado
        </h3>
        <div className="flex flex-wrap -m-4">
          {appDetails.map((detail, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={detail.imageSrc}
                />
                <p className="leading-relaxed text-[#010101]/90 text-[1.3rem] ">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
