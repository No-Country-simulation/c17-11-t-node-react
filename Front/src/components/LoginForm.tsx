import { useState } from "react";
import eyeOpen from "../assets/LoginImages/ojo-abierto.png"
import eyeClosed from "../assets/LoginImages/ojo-cerrado.png"
import googleIcon from "../assets/LoginImages/google-icon.png"
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:3001/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            }).then(response => {
                if(response.ok){
                    navigate("/")
                }else{
                    console.log("Usuario o contraseña incorrectos")
                }
            })
           
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Correo electronico</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electronico" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="relative">
                <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 top-8 right-0 flex items-center px-2 h-10 rounded-r-md focus:outline-none">
                    {showPassword ? (
                        <img src={eyeOpen} alt="open eye" />
                    ) : (
                        <img src={eyeClosed} alt="close eye" />
                    )}
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar contraseña</label>
                    </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button type="submit" className="w-full text-white bg-amber-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-bold">INGRESAR</button>
            <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">o</p>

            <a href="http://localhost:3001/api/v1/auth/google" className="flex items-center space-x-2 justify-center w-full text-black bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-bold">
                <img src={googleIcon} alt="google icon" />
                <span>INICIAR SESIÓN CON GOOGLE</span>

            </a>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Has olvidado tu contraseña? <a href="#" className="font-medium text-black hover:underline dark:text-primary-500">Recuperar</a>
            </p>



            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Aun no tienes cuenta? <a href="#" className="font-medium text-black hover:underline dark:text-primary-500">Registrate aqui</a>
            </p>
        </form>
    )
}