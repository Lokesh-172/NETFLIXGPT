import React from "react";
import FHeader from "./FHeader";
import { Logo } from "../../utils/constants";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950">
      <FHeader />
      <div className="pt-20 pb-12 px-4 flex justify-center items-center min-h-[90vh]">
        <div className="max-w-4xl w-full bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 text-center mb-8">About Us</h1>
            
            <div className="text-gray-200 space-y-4 leading-relaxed">
              <p className="text-lg">
                Welcome to NetflixGPT! We are dedicated to transforming your streaming 
                experience by combining the magic of AI with the world of entertainment.
              </p>
              
              <p>
                Whether you're searching for thrilling dramas, heartwarming romances, 
                or binge-worthy documentaries, we've got recommendations tailored just for you.
              </p>
              
              <p>
                Our platform leverages advanced AI technology to help you discover movies 
                and shows that match your unique taste. From blockbuster hits to hidden gems, 
                NetflixGPT ensures you never run out of captivating content to explore.
              </p>
              
              <p>
                With an intuitive interface and personalized suggestions, finding your next 
                favorite title has never been easier. Dive into curated lists, explore trending 
                picks, or search by genre — NetflixGPT simplifies your streaming journey.
              </p>
              
              <p className="text-lg font-medium text-red-400">
                Thank you for choosing NetflixGPT. Sit back, relax, and let us guide you 
                to endless entertainment!
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <div className="bg-black/30 p-6 rounded-xl">
                <img
                  draggable="false"
                  src={Logo}
                  alt="logo"
                  className="w-32 md:w-40 select-none transition-transform hover:scale-110 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;