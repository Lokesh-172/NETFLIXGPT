import React, { useEffect } from "react";
import { Logo } from "../../utils/constants";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";

const FHeader = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/browse">
          <img
            draggable="false"
            src={Logo}
            alt="logo"
            className="w-28  cursor-pointer md:w-32 select-none transition-transform hover:scale-105"
          />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-200 font-medium">{user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 transition-colors text-sm font-medium"
          >
            <span>Sign Out</span>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FHeader;
