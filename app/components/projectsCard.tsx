"use client";

type ITittle = {
  title: string;
};

const ProjectCards = ({ title }: ITittle) => {
  return (
    <div className="p-5 w-52 animate-[pulse_1.5s_linear] h-28 dark:bg-neutral-500 border border-neutral-500  rounded-sm flex align-middle items-center justify-center hover:border-blue-500 lg:w-96 lg:h-44 sm:w-full ">
      <span className="text-center transition-all hover:text-blue-500 sm:text-xl ">{title}</span>
    </div>
  );
};

export default ProjectCards;
