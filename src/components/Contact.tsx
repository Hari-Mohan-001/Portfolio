"use client";
import Image from "next/image";
import Heading from "./sub/Heading";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-16 lg:px-20 xl:px-40 flex flex-col items-center">
      {/* Heading */}
      <Heading heading="Contact Me" />

      {/* Contact Container */}
      <div className="flex  w-full h-full mt-10 items-center justify-between gap-x-20 lg:flex lg:gap-y-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={"/contact.jpg"}
            alt="contact image"
            width={300}
            height={300}
            className="rounded-xl "
          />
        </div>

        {/* Form Section */}
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          {/* Name and Email */}
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col mt-4">
            <label htmlFor="subject" className="text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Enter your message"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
