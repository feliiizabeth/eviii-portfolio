"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "../../public/images/github-mark-white.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh
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

    // Send POST request to API endpoint
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.ok) {
      setEmailSubmitted(true);
    } else {
      console.error("Failed to send message:", resData);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mb-12 md:mb-12 pt-22 sm:pt-23 lg:pt-28 pb-24 gap-4 relative"
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
          <Link href="https://github.com/ev2070">
            <Image src={GitHubIcon} alt="GitHub Icon" className="w-12 h-12" />
          </Link>
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
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {/* Success message */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
