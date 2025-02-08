import { useState, useRef } from "react";
import checkValidate from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [flag, setFlag] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleSubmit = () => {
    // console.log(email.current?.value);
    // console.log(password.current?.value);

    const nameValue = flag ? null : name.current?.value; // ✅ Only pass name in Sign-Up mode

    const message = checkValidate(
      email.current?.value,
      password.current?.value,
      nameValue,
      flag
    );

    setErrorMessage(message);
    if (message !== null) return;

    if (!flag) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
      />
      <div className="relative flex justify-center items-center h-screen">
        <form
          className="w-3/12 bg-black opacity-80 p-6 text-white rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-white font-bold text-3xl m-2">
            {" "}
            {flag ? "Sign In" : "Sign Up"}
          </h1>
          {!flag && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="bg-gray-600 w-full text-center outline-none  m-2 py-2 rounded-md"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Enter Email"
            className="bg-gray-600 w-full text-center outline-none  m-2 py-2 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className=" bg-gray-600 text-center outline-none w-full m-2 py-2 rounded-md"
          />
          <p className="text-red-600 font-bold m-2">{errorMessage}</p>
          <button
            className="py-4 m-2 w-full outline-none cursor-pointer text-center bg-red-700 rounded-md"
            onClick={handleSubmit}
          >
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
