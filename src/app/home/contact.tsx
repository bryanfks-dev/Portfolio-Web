"use client";

import AirplaneSolidIcon from "@/presentation/icons/airplaneSolid";
import DownloadIcon from "@/presentation/icons/download";
import Link from "next/link";
import TextField from "../components/textField";
import TextFieldArea from "../components/textFieldArea";
import PrimaryButton from "../components/primaryButton";
import { ArrowIcon } from "@/presentation/icons/arrow";
import { useState } from "react";

/**
 * ContactSection is a component that renders the contact section.
 *
 * @returns {JSX.Element} - The contact section.
 */
export default function ContactSection(): JSX.Element {
  /**
   * @state {ContactFormData} formData - The form data.
   *
   * @stateSetter {ContactFormData} setFormData - The form data setter.
   */
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  /**
   * setData is a function that sets the form data.
   *
   * @param {keyof ContactFormData} key - The key of the form data.
   * @param {string} value - The value of the form data.
   *
   * @returns {void}
   */
  const setData = (key: keyof ContactFormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col gap-10 bg-background-primary px-4 py-16 md:px-8 lg:flex-row lg:px-16 lg:py-24 lg:*:flex-1"
    >
      <div className="flex flex-col gap-6 lg:gap-24">
        <div className="flex flex-col gap-6">
          <div className="text- text-5xl font-bold leading-tight text-secondary md:text-6xl lg:text-7xl">
            <span className="flex items-center gap-2">
              Let’s{" "}
              <AirplaneSolidIcon className="size-12 text-subtle lg:size-20" />
            </span>
            <span>{"{Connect}!"}</span>
          </div>

          <span className="text-text-primary">
            Have a chit-chat with me about your questions, interests, hobbies,
            or anything!
          </span>
        </div>

        <span className="flex flex-col gap-2 font-bold text-secondary">
          Want to see my CV?
          <Link
            href="/"
            className="flex w-fit gap-2 font-semibold text-primary underline"
          >
            Download Here
            <DownloadIcon className="size-6" strokeWidth={0.2} />
          </Link>
        </span>
      </div>

      <div className="lg:rounded-lg lg:p-8 lg:shadow-md">
        <span className="hidden text-2xl font-semibold text-primary lg:block">
          send.hi@bryan.com
        </span>

        <form action="/#contact" className="flex flex-col gap-4 lg:mt-8">
          <TextField
            placeholder="What's your name?"
            htmlFor="userName"
            onTyping={(value: string): void => setData("name", value)}
          />

          <TextField
            placeholder="Your email"
            htmlFor="userEmail"
            onTyping={(value: string): void => setData("email", value)}
          />

          <TextFieldArea
            placeholder="Write something here.."
            htmlFor="userMsg"
            onTyping={(value: string): void => setData("message", value)}
          />

          <PrimaryButton className="flex items-center justify-center gap-2 font-semibold">
            Send
            <ArrowIcon className="size-4" strokeWidth={3} />
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
}
