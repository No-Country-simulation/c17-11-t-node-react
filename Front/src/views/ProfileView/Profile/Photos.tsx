import dog from "../../../assets/perro.jpg"
export const Photos =()=>{
    return(
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 className="text-center text-xl text-gray-900 font-bold">Photos</h4>
                    <img src={dog} alt="mascota perro"/>

                </div>
            </div>
        </div>
    )
}