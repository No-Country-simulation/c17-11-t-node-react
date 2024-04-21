import React from "react";

interface Testimonial {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Juan Perez",
    role: "Recoleta - Buenos Aires",
    imageSrc:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "MascoCuidado encaja a la perfección con mi estilo de vida, me facilitó mucho el proceso de cuidado de mi mascota.",
  },
  {
    name: "Yanina Figueroa",
    role: "Rosario - Santa Fe",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Increíble el tiempo que me ahorro desde que mascocuidado me da la simplicidad de conectar con gente tan experimentada en el cuidado de mi Perrito.",
  },
];

const ExperiencesComponent: React.FC = () => {
  return (
    <section className="bg-[#FAF4F4] body-font" id="experiencias">
      <div className="container px-5 py-24 mx-auto">
        <h3 className="text-center text-[#010101] lg:text-4xl text-2xl uppercase font-bold mb-16">
          Experiencias
        </h3>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-[#FF9F00]/75 p-8 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-[#242424] mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-[#010101]/90 mb-6">
                  {testimonial.description}
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.imageSrc}
                    className="w-32 h-32 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font text-lg font-medium text-[#010101]">
                      {testimonial.name}
                    </span>
                    <span className="text-[#010101]/80 text-md">
                      {testimonial.role}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesComponent;
