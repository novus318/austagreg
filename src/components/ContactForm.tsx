"use client";
import React from "react";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
return (
 <div className="flex justify-center items-center h-screen">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#DCFFCD] bg-opacity-20 text-black">
       <h2 className="font-bold text-xl text-[#004AAD] ">
          Welcome to Austagreg
       </h2>
       <p className="text-neutral-600 text-sm max-w-sm mt-2 ">
       Unleash the power of bespoke solutions for your business growth.
       </p>

       <form className="my-8" onSubmit={handleSubmit}>
             <LabelInputContainer className="mb-4">
                <Input id="name" placeholder="Type your name..." type="text" />
             </LabelInputContainer>
          <LabelInputContainer className="mb-4">
             <Input id="email" placeholder="Type your email..." type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
             <TextArea id="textarea" placeholder="Message..."/>
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
