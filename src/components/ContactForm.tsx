"use client";
import React, { useState } from "react";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import emailjs from 'emailjs-com';
export function ContactForm() {
  const SERVICE_ID_EMAIL = 'service_02uh5z3';
  const EMAILJS_TEMPLATE_ID = 'template_pkulcpq';
  const EMAIL_USER_ID = 'y0JyXnE20wjPHDs-m';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = (data:any) => {
    const form = document.createElement('form');


    form.method = 'post';
    form.action = '';
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.name = 'name';
    nameField.value = formData.name;
    form.appendChild(nameField);

    const emailField = document.createElement('input');
    emailField.type = 'text';
    emailField.name = 'email';
    emailField.value = formData.email;
    form.appendChild(emailField);


    const messageField = document.createElement('textarea');
    messageField.name = 'message';
    messageField.value = formData.message;
    form.appendChild(messageField);

    document.body.appendChild(form);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    emailjs.sendForm(SERVICE_ID_EMAIL, EMAILJS_TEMPLATE_ID, form, EMAIL_USER_ID)
    .then((result) => {
      console.log('Email sent successfully!', result.text);

    }, (error) => {
      console.error('Email could not be sent:', error);
    });

  document.body.removeChild(form);
  };


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

return (
  <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-32 px-5">
    <div className="flex justify-center p-6">
      <img src="/images/contact.svg" alt="Image" className="max-h-96" />
    </div>
    <div className="max-w-md w-full rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-[#DCFFCD] bg-opacity-20 text-black mx-auto">
      <h2 className="font-bold text-xl text-[#004AAD]">
        Welcome to Austagreg
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2">
        Unleash the power of bespoke solutions for your business growth.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Input id="name" placeholder="Type your name..." type="text"  name="name"  value={formData.name}
              onChange={handleChange}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Input id="email" placeholder="Type your email..." type="email"  name="email"  value={formData.email}
              onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <TextArea id="textarea" placeholder="Message..."  name="message"  value={formData.message}
              onChange={handleChange} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  </div>
);
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
