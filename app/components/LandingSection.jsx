"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const LandingSection = () => {
  const [isAnimating, setIsAnimating] = useState(false); // For Type Animation
  const textContainerRef = useRef(null); // <h1> that contains the typing animation

  const handleHireMeClick = () => {
    // Scroll to Email Section
    const emailSection = document.getElementById("contact");
    emailSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimating(entry.isIntersecting); // Animation state based on visibility
      },
      {
        threshold: 0.1, // Start when 10% of container is in view
      }
    );

    // If textContainerRef is assigned a DOM element, observe the element for visibility changes
    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    // Have observer stop observing the element (prevents memory leaks)
    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="lg:py-16">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Animated text container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start justify-self-center"
        >
          {/* Introduction heading */}
          <h1
            ref={textContainerRef}
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            {isAnimating && (
              <TypeAnimation
                sequence={[
                  "Elizabeth",
                  1000, // wait 1s
                  "a Problem Solver",
                  1000,
                  "a Creative Coder",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true} // Prevent text jumping when out of view
                shouldForwardProps={() => isAnimating} // Animate when in view only
              />
            )}
          </h1>

          {/* Responsive introduction paragraph */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:pr-10">
            Welcome to the EVIII PORTFOLIO
          </p>

          {/* Buttons container */}
          <div>
            <button
              className="px-6 py-3 w-72 sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>
            <button className="px-1 py-1 w-72 sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 transition duration-300 ease-in-out transform hover:scale-105">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download DV
              </span>
            </button>
          </div>
        </motion.div>

        {/* Animated, responsive image container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="Avatar image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 clip-circle"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
