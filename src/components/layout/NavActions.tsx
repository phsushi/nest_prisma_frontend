
function NavActions() {
  return (
    <div className="flex justify-end gap-4 font-[DM Sans] text-gray-600">
        <button className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md flex-row">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/><circle cx="10" cy="8" r="2"/>
          </svg>
          Home
        </button>
        <button className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md flex-row">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="10" cy="7" r="4"/><path d="M3 18c0-4 3-6 7-6s7 2 7 6"/>
          </svg>
          Conta
        </button>
        <button className="hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md flex-row">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 3h2l2.5 9h8l2-6H7"/>
              <circle cx="9" cy="17" r="1.2" fill="currentColor" stroke="none"/>
              <circle cx="15" cy="17" r="1.2" fill="currentColor" stroke="none"/>
            </svg>
          Carrinho
        </button>
    </div>
  )
}

export default NavActions