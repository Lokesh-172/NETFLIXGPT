import React, { useRef, useState } from "react";
import Header from "./Header";
import { Main_Image, User_Icon } from "../utils/constants";
import { checkValidateSignIn, checkValidateSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toogleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    //Validating Message
    let message;
    isSignIn
      ? (message = checkValidateSignIn(
          email.current.value,
          password.current.value
        ))
      : (message = checkValidateSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        ));
    setErrorMessage(message);
    if (message) return;

    //Sign Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_Icon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="fixed inset-0">
        <img
          draggable="false"
          src={Main_Image}
          alt="main_image"
          className="w-full h-full object-cover select-none"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-10/12 my-40 bg-black/80 sm:w-3/12 px-12 py-8 sm:my-36 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-2 mx-auto my-3 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            placeholder="Enter Name"
            type="text"
            className="p-2 mx-auto my-3 w-full placeholder-gray-400 bg-[#10100F]/60 border-[1px] border-gray-400"
          />
        )}
        <input
          ref={email}
          placeholder="Enter Email"
          type="text"
          className="p-2 mx-auto my-3 w-full placeholder-gray-400 bg-[#10100F]/60 border-[1px] border-gray-400"
        />

        <input
          ref={password}
          placeholder="Enter Password"
          type="password"
          className="p-2 mx-auto my-3 w-full placeholder-gray-400 bg-[#10100F]/60 border-[1px] border-gray-400"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-3 mx-auto my-3 bg-red-600 rounded-lg w-full opacity-100"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer hover:underline my-3 mx-auto"
          onClick={toogleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
