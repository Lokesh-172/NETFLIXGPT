import React, { useState } from "react";
import FHeader from "./FHeader";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";

const FAQ = () => {
  const faqData = [
    {
      question: "What is NetflixGPT?",
      answer: "NetflixGPT is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your NetflixGPT account to watch instantly on the web at netflixgpt.com from your personal computer or on any internet-connected device that offers the NetflixGPT app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take NetflixGPT with you anywhere."
    },
    {
      question: "Where can I watch on NetflixGPT?",
      answer: "NetflixGPT has an extensive library of feature films, documentaries, TV shows, anime, award-winning NetflixGPT originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is NetflixGPT Good for kids?",
      answer: "The NetflixGPT Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    },
    {
      question: "How does NetflixGPT work?",
      answer: "NetflixGPT utilizes advanced AI technology powered by the Gemini API to revolutionize your streaming experience. Our sophisticated recommendation system analyzes your viewing preferences, watch history, and ratings to deliver personalized content suggestions. The AI processes natural language queries to understand your specific entertainment needs, considering factors like genre preferences, mood, and viewing habits. This integration enables features like smart search, content discovery, and tailored recommendations that become more accurate over time as you interact with the platform."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950">
      <FHeader />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-red-600 text-center mb-12">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-md rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl text-gray-200 font-medium">{item.question}</span>
                  <ChevronDown 
                    className={`text-red-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="p-6 pt-0 text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;