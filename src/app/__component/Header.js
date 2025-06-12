import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-slate-600 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-slate-100">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
