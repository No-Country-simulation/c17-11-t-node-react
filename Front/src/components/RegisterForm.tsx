import { useState } from "react";
import eyeOpen from "../assets/LoginImages/ojo-abierto.png"
import eyeClosed from "../assets/LoginImages/ojo-cerrado.png"
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmpassword, setShowConfirmpassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3001/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role, first_name, last_name, email, password, username }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const RoleFunction= async ()=>{
        try {
          const response = await fetch('http://127.0.0.1:3001/api/v1/roles');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
        
          console.log(data);
        } catch (error) {
          
          console.error('There was a problem with the fetch operation:', error);
        }
      }

    const handleChange =(e)=> {

        // Grab the nodeName and value from
        // the clicked element
        const { value } = e.target;
          setRole(value);
        
      }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordConfirmVisibility = () => {
        setShowConfirmpassword(!showConfirmpassword);
    };
    return (
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" name="usuario" id="usuario" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellido" onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Usuario</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Correo electronico</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electronico" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="relative">
                <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 top-8 right-0 flex items-center px-2 h-10 rounded-r-md focus:outline-none">
                    {showPassword ? (
                        <img src={eyeOpen} alt="open eye" />
                    ) : (
                        <img src={eyeClosed} alt="close eye" />
                    )}
                </button>
            </div>
            <div className="relative">
                <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                <input type={showConfirmpassword ? "text" : "password"} name="password" id="password" placeholder="******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <button type="button" onClick={togglePasswordConfirmVisibility} className="absolute inset-y-0 top-8 right-0 flex items-center px-2 h-10 rounded-r-md focus:outline-none">
                    {showConfirmpassword ? (
                        <img src={eyeOpen} alt="open eye" />
                    ) : (
                        <img src={eyeClosed} alt="close eye" />
                    )}
                </button>
            </div>
            <div className="flex items-center space-x-5" onChange={handleChange}>
                <div className="flex items-center ">
                    <input id="default-radio-1" type="radio" value={1} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dueño</label>
                </div>
                <div className="flex items-center">
                    <input id="default-radio-2" type="radio" value={2} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cuidador</label>
                </div>

            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Acepto los </label>
                        <a href="#" className="font-medium text-black hover:underline dark:text-primary-500">Terminos y condiciones</a>
                    </div>
                </div>
            </div>
            <button type="submit" className="w-full text-white bg-violet-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-bold">REGISTRARME</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Has olvidado tu contraseña? <a href="#" className="font-medium text-black hover:underline dark:text-primary-500">Recuperar</a>
            </p>

        </form>
    )
}