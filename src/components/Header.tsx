import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="py-6 flex items-center justify-between w-full bg-card">
      <div className="flex w-full justify-between items-center max-w-[90rem] px-6 sm:px-16 mx-auto">
        <h1 className="text-base sm:text-2xl font-semibold">
          Where in the world?
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
}
