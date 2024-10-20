import ContactForm from "../components/formContact";
export default function Contact() {
  return (
    <main className="flex flex-col items-start  lg:pl-0">
      <div className="flex justify-center items-center flex-col self-center">
        <h1 className="text-6xl tracking-widest fullSm:text-5xl">Contact</h1>
        <p className="tracking-widest">Thank your for being here</p>
      </div>
      <ContactForm />
      <p className="self-center dark:text-white opacity-25 mb-10 tracking-widest">
        {"You're very Welcome."}

      </p>
    </main>
  );
}
