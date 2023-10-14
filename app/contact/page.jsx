"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Logos from "@/components/Logos";
import ScheduleDemo from "@/components/ScheduleDemo";

const Error = ({ errors, property }) => {
  return (
    <>
      {errors.hasOwnProperty(property) ? (
        <span className="mt-2 px-5 font-sans text-[11px] tracking-[-0.085px] text-[#FF0000] opacity-50">
          This field can't be empty
        </span>
      ) : null}
    </>
  );
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const styles = {
    input: `border-b-[1px] pt-6 pb-4 border-solid border-b-blue-grey border-opacity-30 bg-[#EDF3F8] px-5 font-sans text-body leading-[25px] tracking-[-0.115px] text-blue-grey outline-none`,
  };

  return (
    <>
      <main className="flex flex-col gap-20 px-6 ">
        <h1 className="hidden text-center font-serif text-h1-s leading-h1-s tracking-[-0.431px] text-blue-grey lg:block">
          Submit a help request and we'll get in touch shortly.
        </h1>
        <div className="space-y-4 md:px-80">
          <h1 className="text-center font-serif text-h3-l leading-h3-l tracking-[-0.246px] text-blue-grey md:text-h2 md:leading-h2 md:tracking-[-0.369px] lg:hidden">
            Submit a help request and we'll get in touch shortly.
          </h1>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className={`${styles.input} ${
                errors.hasOwnProperty("name")
                  ? "border-b-[#FF0000] border-opacity-50 placeholder:text-[#FF0000] placeholder:opacity-50"
                  : null
              }`}
              {...register("name", { required: true })}
            />
            <Error errors={errors} property="name" />

            <input
              type="text"
              placeholder="Email Address"
              className={`${styles.input} ${
                errors.hasOwnProperty("email")
                  ? "border-b-[#FF0000] border-opacity-50 placeholder:text-[#FF0000] placeholder:opacity-50"
                  : null
              }`}
              {...register("email", { required: true })}
            />
            <Error errors={errors} property="email" />

            <input
              type="text"
              placeholder="Company Name"
              className={`${styles.input} ${
                errors.hasOwnProperty("company")
                  ? "border-b-[#FF0000] border-opacity-50 placeholder:text-[#FF0000] placeholder:opacity-50"
                  : null
              }`}
              {...register("company", { required: true })}
            />
            <Error errors={errors} property="company" />

            <input
              type="text"
              placeholder="Title"
              className={`${styles.input} ${
                errors.hasOwnProperty("title")
                  ? "border-b-[#FF0000] border-opacity-50 placeholder:text-[#FF0000] placeholder:opacity-50"
                  : null
              }`}
              {...register("title", { required: true })}
            />
            <Error errors={errors} property="title" />

            <textarea
              type="text"
              placeholder="Message"
              className={`${styles.input} ${
                errors.hasOwnProperty("message")
                  ? "border-b-[#FF0000] border-opacity-50 placeholder:text-[#FF0000] placeholder:opacity-50"
                  : null
              }`}
              rows={3}
              {...register("message", { required: true })}
            />
            <Error errors={errors} property="message" />

            <div className="flex gap-6 py-6">
              <input
                type="checkbox"
                id="checkbox"
                className="scale-150 bg-blue-grey opacity-25"
                {...register("maillist")}
              />
              <label
                htmlFor="checkbox"
                className="font-sans text-body leading-[25px] tracking-[-0.115px] text-blue-grey"
              >
                Stay up-to-date with company announcements and updates to our
                API
              </label>
            </div>

            <button
              type="submit"
              className="mr-auto rounded-full border-[1px] border-solid border-blue-grey px-[50px] py-[15px] font-sans text-body font-bold tracking-[-0.115px] text-blue-grey"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-center font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey opacity-75">
            Join the thousands of innovaters already building with us
          </h2>
          <div className="mx-auto w-[85%] md:w-[550px]">
            <Logos />
          </div>
        </div>
      </main>
      <ScheduleDemo />
    </>
  );
};

export default Contact;
