import Logo from "./Logo";
import NavActions from "./NavActions";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between gap-4 px-4 py-2 border-b border-gray-200">
      <Logo />
      <SearchBar />
      <NavActions />
    </div>
  );
}

export default Header;
