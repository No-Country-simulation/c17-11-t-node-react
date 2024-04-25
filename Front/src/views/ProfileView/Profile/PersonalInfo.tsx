export const PersonalInfo=()=>{
    return(
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-8 max-sm:text-sm">
                    <h4 className="text-center text-xl text-gray-900 font-bold">Información personal</h4>
                    <ul className="mt-2 text-gray-700">
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Cumpleaños:</span>
                            <span className="text-gray-700">24 Jul, 1991</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Se unio a nuestra familia:</span>
                            <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Telefono celular:</span>
                            <span className="text-gray-700">(123) 123-1234</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-gray-700">amandaross@example.com</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Ciudad:</span>
                            <span className="text-gray-700">New York, US</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}