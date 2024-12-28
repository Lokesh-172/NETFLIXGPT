import React, { useEffect, useState } from "react";
import { Logo, SUPPORTED_LANGUAGE } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import OpenSetting from "./OpenSetting";
import { removeGPTMovies, togglegptBox } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [setting, setSetting] = useState(false);
  const user = useSelector((store) => store.user);
  const gptBox = useSelector((store) => store.gpt.gptBox);
  const { moviesName, tmdbResults } = useSelector((store) => store.gpt);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/browse/gpt") {
      if (!gptBox) dispatch(togglegptBox(true));
    } else {
      if (gptBox) dispatch(togglegptBox(false));
    }
    if (!gptBox) {
      dispatch(
        removeGPTMovies({ moviesName: moviesName, tmdbResults: tmdbResults })
      );
    }
  }, [gptBox, dispatch, moviesName, tmdbResults]);

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (!location.pathname.startsWith("/browse")) {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGPTSearch = () => {
    dispatch(togglegptBox(!gptBox));
  };

  const handleSetting = () => {
    setSetting(!setting);
  };

  return (
    <div>
      <div className="absolute w-full z-10 sm:bg-black/40 bg-black/0 px-2 py-2 sm:px-6 md:px-8 lg:px-12">
        {!user && (
          <img
            draggable="false"
            src={Logo}
            alt="logo"
            className="w-[8rem] sm:w-[13rem] mx-auto sm:mx-40 select-none"
          />
        )}
        {user && (
          <div className="flex justify-between items-center w-full">
            <Link to="/browse">
              <img
                draggable="false"
                src={Logo}
                alt="logo"
                className="w-[8rem] sm:w-[12rem] select-none"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-4">
              {gptBox && (
                <select
                  className="bg-black text-white p-1 sm:p-2 text-xs sm:text-sm rounded-md"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGE.map((lang) => (
                    <option value={lang.identifier} key={lang.name}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              
              <Link to="/browse/gpt">
                <button
                  className="p-1 sm:p-2 bg-purple-800 rounded-lg text-white text-xs sm:text-sm font-medium"
                  onClick={handleGPTSearch}
                >
                  GPT SEARCH
                </button>
              </Link>

              <div className="relative flex items-center gap-2 justify-center cursor-pointer" onClick={handleSetting}>
                <img
                  draggable="false"
                  src={user?.photoURL}
                  alt="usericon"
                  className="w-8 sm:w-10 rounded-full sm:rounded-none select-none"
                />
                {setting && <OpenSetting />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;