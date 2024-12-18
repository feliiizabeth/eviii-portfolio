"use client";
import React, { useState } from "react";
import GitHubIcon from "../../public/images/social_logos/github-mark-white.svg";
import ItchioIcon from "../../public/images/social_logos/itchio-textless-white.svg";
import LinkedInIcon from "../../public/images/social_logos/In-White-96.png";
import SocialLink from "./SocialLink";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false); // for email submission
  const [isSending, setIsSending] = useState(false); // for loading state
  const [errorMessage, setErrorMessage] = useState(""); // for error handling

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh
    setIsSending(true);
    setErrorMessage(""); // reset
    setEmailSubmitted(false); // reset

    // Data extracted from form
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    // Prep data for API endpoint that sends email
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Configure options for POST request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      // Send POST request to API endpoint
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset(); // Clear form upon submission
        // Clear success message after 3 seconds
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000);
      } else {
        throw new Error(resData.error || "Failed to send email message");
      }
    } catch (e) {
      setErrorMessage(e.message);
      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setIsSending(false); // reset
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mb-12 pt-22 sm:pt-23 lg:pt-28 pb-24 gap-4 relative"
    >
      {/* Blurry circle */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Contact content container */}
      <div className="z-5">
        <h5 className="text-xl font-bold text-white mb-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out if you'd like to chat about potential projects,
          collaborations, job opportunities, or just to connect! I'm always
          excited to explore new opportunities and share ideas. I look forward
          to hearing from you!
        </p>
        <div className="socials flex flex-row gap-2">
          <SocialLink
            href="https://github.com/ev2070"
            src={GitHubIcon}
            alt="GitHub Icon"
          />
          <SocialLink
            href="https://www.linkedin.com/in/ev2070/"
            src={LinkedInIcon}
            alt="LinkedIn Icon"
          />
          <SocialLink
            href="https://ev2070.itch.io/"
            src={ItchioIcon}
            alt="Itchio Icon"
          />
        </div>
      </div>

      {/* Email message form */}
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Reaching out for..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full transition duration-300 ease-in-out ${
              isSending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-600 transform hover:scale-105"
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* Success or error messages */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
