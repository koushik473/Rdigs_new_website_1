"use client";
import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Simulate sending data to backend (replace with actual API call)
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setEmail('');
      } else {
        setSubmitError('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubmitError('Failed to subscribe. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pb-25 max-md:overflow-hidden max-md:pb-25">
      <div className="container relative max-md:text-center">
        {/* Background circles */}
        <div className="absolute -bottom-[442px] left-1/2 -z-10 flex -translate-x-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:hidden 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>

        {/* Background gradient */}
        <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>

        {/* Newsletter content */}
        <div>
          <div>
            <p className="section-tagline">Start Today</p>
          </div>
          <div className="grid-y-10 grid grid-cols-12 items-start">
            <div className="max-md:col-span-full md:col-span-6 lg:col-span-7">
              <h2 className="mb-5 text-[48px] font-semibold max-lg:text-[32px]">Let's Talk free trial now!</h2>
              <p>
                Transform Your Business with Our Custom Web Design Services! Embark on your best payment experience
                today by bringing your vision to life with our tailored web design solutions.
              </p>
            </div>
            <div className="max-md:col-span-full max-md:mt-5 md:col-span-6 lg:col-span-5">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:text-light text-light h-full rounded-[60px] border border-borderColor bg-transparent bg-white ps-5 leading-[1.75] text-[#A1A49D] outline-none transition-all duration-300 focus:border-primary focus:outline-none dark:border-[#31332F] dark:bg-dark-200 dark:placeholder:text-[#A1A49D] dark:focus:border-primary max-lg:col-span-full max-lg:py-3.5 lg:col-span-8"
                    required
                  />
                  <button type="submit" className="btn max-lg:col-span-full lg:col-span-4" disabled={submitting}>
                    {submitting ? 'Subscribing...' : 'Get Started'}
                  </button>
                </div>
              </form>
              <ul className="mt-6 flex items-center max-lg:justify-between max-lg:gap-y-2.5 max-md:flex-col lg:gap-5">
                <li className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3">
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      className="stroke-paragraph dark:stroke-primary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>No Credit Card Required</p>
                </li>
                <li className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3">
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      className="stroke-paragraph dark:stroke-primary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Free For 30 Day Trial.</p>
                </li>
              </ul>
              {submitSuccess && (
                <p className="`t-2 text-green-500`">
                  Thank you for subscribing! You will receive a confirmation shortly.
                </p>

              )}
              {submitError && (
                <p className="text-red-500 mt-2">{submitError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
