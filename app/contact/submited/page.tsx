import Link from "next/link";
export default function SubmitedPage() {
  return (
    <main className="h-screen flex flex-col items-start  lg:pl-0">
      <div className="flex justify-center items-center flex-col self-center">
        <h1 className="text-6xl tracking-widest fullSm:text-5xl">
          {"You've reached me."}
        </h1>
        <p className="tracking-widest">
          {"I'll contact you soon as possible."}
        </p>
        <Link
          href="/contact"
          className="dark:hover:border-blue-600 mt-4 hover:border-blue-600  outline-none  border w-1/3 text-center text-lg p-3 dark:border-white dark:border-opacity-25 transition-all bg-transparent cursor-pointer fullSm:w-3/4 fullSm:self-center"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
