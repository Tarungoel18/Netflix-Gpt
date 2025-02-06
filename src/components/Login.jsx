import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <Header />
      <img
        className="absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
      />
      <div className="relative flex justify-center items-center h-screen">
        <form className="w-3/12 bg-black opacity-80 p-6 text-white rounded-lg">
          <h1 className="text-white font-bold text-3xl m-2">
            {" "}
            {flag ? "Sign In" : "Sign Up"}
          </h1>
          {!flag && (
            <input
              type="text"
              placeholder="Enter Full Name"
              className="bg-gray-600 w-full text-center outline-none  m-2 py-2 rounded-md"
            />
          )}

          <input
            type="text"
            placeholder="Enter Email"
            className="bg-gray-600 w-full text-center outline-none  m-2 py-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter password"
            className=" bg-gray-600 text-center outline-none w-full m-2 py-2 rounded-md"
          />
          <button className="py-4 m-2 w-full outline-none cursor-pointer text-center bg-red-700 rounded-md">
            {flag ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={() => setFlag(!flag)}>
            {flag ? "New User? Sign Up" : "Already a User ? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
