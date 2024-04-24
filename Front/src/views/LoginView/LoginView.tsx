import { LoginForm } from "./LoginForm/LoginForm";

const LoginView = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 mt-20 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              ¡Ingresa a tu cuenta!
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginView;
