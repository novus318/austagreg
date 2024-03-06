"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function JoinUs() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "things",
    },
    {
      text: "with",
    },
    {
      text: "Competency.",
      className: "text-[#7ED957]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-6 mont-heavy">
      <p className="text-neutral-600 text-xs sm:text-base mont ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-[#7ED957] border text-white text-sm hover:bg-[#6cbf4d]">
        Get Started
        </button>
      </div>
    </div>
  );
}
