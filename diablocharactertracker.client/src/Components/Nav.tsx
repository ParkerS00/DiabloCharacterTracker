import { useState } from "react";
import LoginLogoutButton from "../Authentication/LoginLogoutButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blood-500 w-full top-0 z-10 shadow-xl">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <a href="/" className="text-blood-200 text-2xl font-bold">
              Diablo Tracker
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-blood-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex space-x-4">
            <a
              href="/armor"
              className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium"
            >
              Armor
            </a>
            <a
              href="/weapons"
              className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium"
            >
              Weapons
            </a>
            <a
              href="/accessories"
              className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium"
            >
              Accessories
            </a>
            <LoginLogoutButton />
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-blood-500 px-4 py-2 space-y-2 flex flex-col items-end`}
      >
        <a
          href="/armor"
          className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium text-right"
        >
          Armor
        </a>
        <a
          href="/weapons"
          className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium text-right"
        >
          Weapons
        </a>
        <a
          href="/accessories"
          className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium text-right"
        >
          Accessories
        </a>
        <div className="text-right">
          <LoginLogoutButton />
        </div>
      </div>
    </nav>
  );
};
