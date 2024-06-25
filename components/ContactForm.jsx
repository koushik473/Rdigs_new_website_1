"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { useRef } from "react";

const ContactForm = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    companyName: "",
    jobTitle: "",
    message: "",
  });

  // State for submission status
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Example: Send formData to your backend API or server-side handler
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission
        setSubmitSuccess(true);
        setFormData({
          username: "",
          email: "",
          companyName: "",
          jobTitle: "",
          message: "",
        });
      } else {
        // Handle submission error
        setSubmitError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative mb-150">
      <motion.div
        className="container relative"
        ref={ref}
        initial="initial"
        animate={controlAnimation}
        variants={fadeUpAnimation}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="username"
                className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="email"
                className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="companyName"
                className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="jobTitle"
                className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
              >
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                className="block w-full resize-none rounded border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              ></textarea>
            </div>
            <div className="col-span-full mx-auto text-center">
              <button type="submit" className="btn" disabled={submitting}>
                {submitting ? "Submitting..." : "Contact Now"}
              </button>
              {submitSuccess && (
                <p className="text-green-500 mt-2">
                  You will receive a confirmation email shortly.
                </p>
              )}
              {submitError && (
                <p className="text-red-500 mt-2">{submitError}</p>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
