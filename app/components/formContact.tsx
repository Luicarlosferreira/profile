"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const form = useRef<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiVariables: any = {
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    publicId: process.env.NEXT_PUBLIC_PUBLIC_ID,
  };

  const sendEmail = async (
    event: React.FormEvent<HTMLFormElement | HTMLFormElement>
  ) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    try {
      await emailjs
        .sendForm(
          apiVariables.serviceId,
          apiVariables.templateId,
          form.current,
          apiVariables.publicId
        )
        .then(
          () => {
            router.push("/contact/submited", { scroll: true });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <p className="text-center self-center tracking-widest w-full text-green-400">
        {"Almost there..."}
      </p>
    );
  }

  return (
    <div className="m-auto pt-10 w-formWidth lg:w-3/4 sm:w-10/12	 mb-24">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
        <div className="flex gap-5 justify-between sm:gap-2 fullSm:flex-col fullSm:gap-1">
          <div className="flex flex-col w-full gap-1">
            <label className="tracking-widest opacity-75">First Name</label>
            <input
              minLength={4}
              autoComplete="given-name"
              required
              type="text"
              placeholder="First Name"
              name="user_first_name"
              className="placeholder:tracking-widest dark:placeholder:text-white dark:placeholder:opacity-25  dark:focus:border-blue-600 focus:border-blue-600 pt-2 pb-1 outline-none bg-transparent border-b dark:border-white dark:border-opacity-25 transition-all"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="tracking-widest dark:text-white opacity-75">
              Last Name
            </label>
            <input
              minLength={4}
              required
              autoComplete="family-name"
              type="text"
              placeholder="Last Name"
              name="user_last_name"
              className="dark:placeholder:text-white  placeholder:tracking-widest dark:placeholder:opacity-25 dark:focus:border-blue-600 focus:border-blue-600 pt-2 pb-1 outline-none bg-transparent border-b dark:border-white dark:border-opacity-25 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-2/1 gap-1">
          <label className="tracking-widest dark:text-white opacity-75">
            Email
          </label>
          <input
            minLength={6}
            required
            type="email"
            placeholder="E-mail"
            name="user_email"
            autoComplete="email"
            className="placeholder:tracking-widest dark:placeholder:text-white dark:placeholder:opacity-25 dark:focus:border-blue-600 focus:border-blue-600 pt-2 pb-1 outline-none bg-transparent border-b dark:border-white dark:border-opacity-25 transition-all"
          />
        </div>
        <label className="tracking-widest opacity-75">Message</label>
        <textarea
          required
          name="message"
          placeholder="Type your questions"
          className="p-2 placeholder:tracking-widest dark:placeholder:text-white dark:placeholder:opacity-25 transition-all outline-none  border dark:border-white dark:border-opacity-25 focus:border-blue-600 dark:focus:border-blue-600 bg-transparent"
        />
        <input
          type="submit"
          value="Send"
          className="dark:hover:border-blue-600  hover:border-blue-600  outline-none  border w-1/3 p-3 dark:border-white dark:border-opacity-25 transition-all bg-transparent cursor-pointer fullSm:w-3/4 fullSm:self-center"
        />
      </form>
      {error && (
        <p className="text-center mt-6 text-red-600">
          Something was wrong! Please Try again.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
