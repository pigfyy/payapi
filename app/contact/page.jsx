"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Logos from "@/components/Logos";
import ScheduleDemo from "@/components/ScheduleDemo";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const styles = {
    input:
      "border-b-[1px] pt-6 pb-4 border-solid border-b-blue-grey border-opacity-30 bg-[#EDF3F8] px-5 font-sans text-body leading-[25px] tracking-[-0.115px] text-blue-grey outline-none",
  };

  return (
    <>
      <main className="space-y-20 px-6">
        <div className="space-y-4">
          <h1 className="text-center font-serif text-h3-l leading-h3-l tracking-[-0.246px] text-blue-grey">
            Submit a help request and we'll get in touch shortly.
          </h1>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              {...register("name", { required: true })}
            />

            <input
              type="text"
              placeholder="Email Address"
              className={styles.input}
              {...register("email", { required: true })}
            />

            <input
              type="text"
              placeholder="Company Name"
              className={styles.input}
              {...register("company", { required: true })}
            />

            <input
              type="text"
              placeholder="Title"
              className={styles.input}
              {...register("title", { required: true })}
            />

            <textarea
              type="text"
              placeholder="Message"
              className={styles.input}
              rows={3}
              {...register("message", { required: true })}
            />

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
        <div className="space-y-8">
          <h2 className="text-center font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey opacity-75">
            Join the thousands of innovaters already building with us
          </h2>
          <div className="mx-auto w-[85%]">
            <Logos />
          </div>
        </div>
      </main>
      <ScheduleDemo />
    </>
  );
};

export default Contact;
