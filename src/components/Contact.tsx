"use client";
import Image from "next/image";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validateForm = () => {
    const formData = new FormData(form.current!);
    const newErrors: Record<string, string> = {};

    // Check for empty fields
    formData.forEach((value, key) => {
      if (!value) {
        newErrors[key] = `${key} is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }
    if (form.current) {
      // Ensure form.current is not null
      emailjs
        .sendForm(
          "service_tc5vhtz",
          "template_nshekvl",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSubmittedMessage("The message is send seccessfully")
            form.current?.reset(); // Reset the form on success
             setErrors({});
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div
      id="contact"
      className="h-screen px-6 py-4 lg:px-20 xl:px-40 flex flex-col items-center"
    >
      {/* Heading */}
      <Heading heading="Contact Me" />

      {/* Contact Container */}
      <div className="flex  w-full h-full mt-10 items-center justify-between gap-x-20 lg:flex lg:gap-y-10">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.jpg"}
            alt="contact image"
            width={300}
            height={300}
            className="rounded-xl "
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Name and Email */}
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter your name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
                   {errors.from_name && <p className="text-red-500">{errors.from_name}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               {errors.from_email && <p className="text-red-500">{errors.from_email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col mt-3">
            <label htmlFor="subject" className="text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </motion.form> 
        {submittedMessage && <p className="text-green-500">{submittedMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
