import ProjectCards from "../components/projectsCard";
import Link from "next/link";
import gitProjects from "../utils/projectsGit";

export default function Projects() {
  return (
    <main className="flex flex-col items-start pl-16  lg:pl-0">
      <div className="flex justify-center items-center flex-col self-center">
        <h1 className="text-6xl tracking-widest fullSm:text-5xl">PROJECTS</h1>
        <p>Thank your for being here</p>
      </div>
      <section className="flex flex-col  mt-36 gap-4 pb-10 w-3/4 lg:w-full lg:p-16 fullSm:p-5">
        <hr className="w-96  dark:text-white sm:w-full" />
        <p> Projects</p>
        <div className="w-full gap-10 flex flex-wrap sm:flex-col">
          {gitProjects.map((item) => {
            return (
              <Link key={item.id} href={item.link} target="_blank">
                <ProjectCards title={item.title} />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
