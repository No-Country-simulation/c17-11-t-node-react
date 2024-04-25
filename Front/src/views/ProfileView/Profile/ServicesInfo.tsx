export const ServicesInfo = () => {
  return (
    <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
      <div className="w-full flex flex-col 2xl:w-1/3">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 className="text-center text-xl text-gray-900 font-bold">
            Services Info
          </h4>
          <div className="space-y-2">
            <h5 className="font-semibold">Limpieza con champu y jabon</h5>
            <h5 className="font-semibold">Corte de pelo</h5>
            <h5 className="font-semibold">Paseo por plazas</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
