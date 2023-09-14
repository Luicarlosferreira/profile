import SectionTechs from "./components/sectionTechs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-12 md:p-0 md:py-24 md:px-10 ">
      <div className="text-center h-96">
        <h1 className="text-5xl font-bold lg:text-4xl md:text-3xl sm:text-xxl fullSm:text-xl">
          Luis Carlos Ferreira Carneiro
        </h1>
        <p className="tracking-widest">Software Engineer</p>
      </div>
      <hr className="w-full" />
      <SectionTechs />
    </main>
  );
}
