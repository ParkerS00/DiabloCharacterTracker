import LoginLogoutButton from "../Authentication/LoginLogoutButton";

export const Navbar = () => {
  return (
    <nav className="bg-blood-500 w-full top-0 z-10 shadow-xl">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <a href="\" className="text-blood-200 text-2xl font-bold">
              Diablo Tracker
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="\armor"
              className="text-blood-200 hover:text-blood-50 rounded-md text-md font-medium"
            >
              Armor
            </a>
            <LoginLogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
