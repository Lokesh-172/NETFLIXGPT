import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const OpenSetting = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div>
      <button
        className="text-white relative inline-block text-sm font-semibold cursor-pointer before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-500 before:ease-in-out before:-translate-x-1/2 hover:before:w-full"
        onClick={handleSignOut}
      >
        (Sign Out)
      </button>
    </div>
  );
};

export default OpenSetting;
