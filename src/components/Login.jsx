import fog from "../assets/fog.svg"
import google from "../assets/google.svg"
import fingerprint from "../assets/fingerprint.svg"

function Login() {
    return (
        <div className="h-screen">
            <div className="flex items-center py-2 px-2">
                <div className="mr-1">
                    <img src={fog} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl">
                        <span className="font-bold">FOG</span>Teams
                    </h1>
                    <p className="text-purple-500 text-xs font-semibold text-right">Own Your Time</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-2 my-2 gap-24">
                <div className="">
                    <img className="" src={fingerprint} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-3xl font-semibold mb-2">Welcome to FogTeams</h1>
                        <p className="text-gray-500 font-semibold mb-4">Welcome back! Please enter your details</p>
                    </div>
                    <form className="bg-white px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="otp"
                            >
                                OTP
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="otp"
                                type="otp"
                                placeholder="Enter OTP"
                            />
                            <a
                                className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
                                href="#"
                            >
                                Resend OTP
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-2">
                            <button
                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded focus:outline-none focus:shadow-outline w-full"
                                type="button"
                            >
                                Login
                            </button>
                            <button
                                className="bg-transparent hover:bg-purple-500 font-semibold hover:text-white py-2 px-4 mr-1 border border-purple-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center"
                                type="button"
                            >
                                <figure>
                                    <img src={google} alt="" />
                                </figure>
                                Sign in with Google
                            </button>
                        </div>
                        <p className="mt-4">
                            Don't have an account?{" "}
                            <a to="/register">
                                <span className="text-purple-500 font-semibold hover:text-purple-800">
                                    Sign up
                                </span>
                            </a>
                        </p>
                        <p className="text-sm mt-2">© 2023 FOGTeams</p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;


