import React from "react"; 
import { Logo } from "../utils/constants"; 
import { Link } from "react-router-dom"; 
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"; 

const Footer = () => { 
  const footerLinks = { 
    "Company": ["About Us", "Careers", "Press", "Blog"], 
    "Support": ["Help Center", "FAQ", "Contact Us", "Legal Notices"], 
    "Services": ["Plans & Pricing", "Gift Cards", "Ways to Watch", "Speed Test"], 
    "Connect": ["Community", "Partners", "Investors", "Terms of Service"] 
  };

  const socialIcons = [ 
    { Icon: Facebook, label: "Facebook" }, 
    { Icon: Twitter, label: "Twitter" }, 
    { Icon: Instagram, label: "Instagram" }, 
    { Icon: Youtube, label: "Youtube" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return ( 
    <footer className="bg-black text-gray-300 w-full z-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
        <div className="border-b border-gray-700 pb-8"> 
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4"> 
            Transform your entertainment experience with NetflixGPT! 
          </h2> 
          <div className="flex flex-wrap gap-4 items-center"> 
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"> 
              Get Started 
            </button> 
            <div className="flex items-center gap-4"> 
              <Mail className="w-5 h-5" /> 
              <span>support@netflixgpt.com</span> 
            </div> 
            <div className="flex items-center gap-4"> 
              <Phone className="w-5 h-5" /> 
              <span>1-800-NETFLIX</span> 
            </div> 
          </div> 
        </div> 

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8"> 
          {Object.entries(footerLinks).map(([category, links]) => ( 
            <div key={category}> 
              <h3 className="text-white font-semibold mb-4">{category}</h3> 
              <ul className="space-y-2"> 
                {links.map((link) => ( 
                  <li key={link}> 
                    <Link 
                      to={`/footer/${link.split(" ").join("")}`} 
                      className="hover:text-white transition-colors" 
                      onClick={handleScrollToTop} // Add this onClick handler
                    > 
                      {link} 
                    </Link> 
                  </li> 
                ))} 
              </ul> 
            </div> 
          ))} 
        </div> 

        <div className="border-t border-gray-700 pt-8 mt-8"> 
          <div className="flex flex-col md:flex-row justify-between items-center gap-6"> 
            <img 
              draggable="false" 
              src={Logo} 
              alt="NetflixGPT Logo" 
              className="w-32 select-none" 
            /> 
            <div className="flex gap-6"> 
              {socialIcons.map(({ Icon, label }) => ( 
                <a 
                  key={label} 
                  href="#" 
                  className="hover:text-white transition-colors" 
                  aria-label={label} 
                > 
                  <Icon className="w-6 h-6" /> 
                </a> 
              ))} 
            </div> 
          </div> 
          <p className="text-center text-sm mt-8"> 
            © {new Date().getFullYear()} NetflixGPT. All rights reserved. 
          </p> 
        </div> 
      </div> 
    </footer> 
  ); 
}; 

export default Footer;
