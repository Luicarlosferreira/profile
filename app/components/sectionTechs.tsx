"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import techs from "../utils/techs";

const SectionTechs = () => {
  return (
    <section className="flex flex-col justify-center mt-24 w-full">
      <h1 className="text-center text-3xl mb-10">Skills</h1>
      <div className="flex gap-10 justify-evenly md:flex-wrap">
        <div className="border border-zinc-800 dark:border-white rounded-sm w-2/5 flex justify-start flex-col items-center gap-11 p-4 md:w-4/5 sm:w-full">
          <span className="font-bold tracking-widest"> Front End</span>
          <div className="flex flex-col justify-start items-start w-full ">
            {techs.frontTechs &&
              techs.frontTechs.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 justify-start items-center"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="border border-zinc-800 dark:border-white rounded-sm  p-4  w-2/5 flex justify-start flex-col items-center gap-11 md:w-4/5  sm:w-full">
          <span className="font-bold tracking-widest">Back End</span>
          <div className="flex flex-col justify-start items-start w-full">
            {techs.backTechs &&
              techs.backTechs.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 justify-start items-center"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTechs;
