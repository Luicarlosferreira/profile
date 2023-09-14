import Menu from "./menu";
import ThemeButton from "./buttonTheme";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="items-center w-full p-14 h-40 flex justify-between text-center sm:p-0 sm:py-14 sm:px-10 fullSm:p-0 fullSm:py-14 fullSm:px-5 ">
        <Menu />
        <ThemeButton />
      </nav>
    </header>
  );
}
