import { Card } from "flowbite-react";
import Logo from "../assets/QfitLogo/logo-with-non-bg.png";
import { login } from "../services/AuthService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthSchema } from "../schema/AuthSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

function LoginPage() {
  const navigate = useNavigate();
  const { handleSubmit, control, register } = useForm({
    resolver: yupResolver(AuthSchema),
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    const userName = data.email;
    data.username = userName;
    delete data.email;
    try {
      const response = await login(data);
      if (response.isSuccess) {
        toast.success("Login Success");
        navigate("/admin/dashboard");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      toast.error("User Email or password is incorrect");
    }
  };

  return (
    <Card className=" w-full min-h-80vh">
      <div className="flex flex-col items-center px-6 justify-center  lg:gap-y-12 ">
        <div className="flex rounded-lg border  border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col md:max-w-xl md:flex-row w-full md:max-w-[1024px]">
          <img
            alt="LOGO"
            className=" lg:w-64 md:w-full sm:w-full rounded-t-lg object-cover md:h-auto  md:rounded-none md:rounded-l-lg bg-nav-cream  dark:bg-gray-800"
            src={Logo}
          />

          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">Sign in to QFit</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex flex-col gap-y-3">
                <label
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="text">
                  User Email
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      id="email"
                      {...register("email")}
                      control={control}
                      placeholder=""
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-col gap-y-3">
                <label
                  className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="password">
                  Password
                </label>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      id="password"
                      {...register("password")}
                      control={control}
                      placeholder=""
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <input
                    className="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                  />
                  <label
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="w-1/2 text-right text-sm text-primary-600  dark:text-gray-300 ">
                  Lost Password?
                </a>
              </div>
              <div className="mb-6">
                <button
                  className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:ring-2 p-0 font-medium rounded-lg w-full lg:w-auto"
                  type="submit">
                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                    Login to your account
                  </span>
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  className="text-blue-600 dark:text-primary-300 cursor-pointer"
                  onClick={() => navigate("/register")}>
                  Create account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LoginPage;
