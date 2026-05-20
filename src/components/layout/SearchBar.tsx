import { fonts } from "../../tokens/fonts";

function SearchBar() {
  return (
    <div className="w-full items-center justify-center hidden md:flex">
      {/*Quando estiver em focus a borda deve ficar levemente mais escura*/}
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="border border-black/40 rounded-md px-4 py-1 w-full bg-gray-100 text-xs text-black h-8 font-medium
           focus:border-black/70 outline-none" style={{ fontFamily: fonts.sans, fontSize: 14 }}
      />
    </div>
  );
}

export default SearchBar;
