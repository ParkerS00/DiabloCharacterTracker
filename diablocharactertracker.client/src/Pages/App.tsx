import { Navbar } from "../Components/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Armor from "./Armor";
import Weapons from "./Weapons";
import Accessories from "./Accessories";
import Skills from "./Skills";
import ViewArmor from "./ViewArmor";
import { UserAccountContextProvider } from "../Contexts/UserContext";
import Character from "./Character";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import ViewWeapon from "./ViewWeapon";
import ViewAccessory from "./ViewAccessory";
import ViewSkill from "./ViewSkill";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <QueryClientProvider client={queryClient}>
          <UserAccountContextProvider>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/armor" element={<Armor />} />
                <Route path="/weapons" element={<Weapons />} />
                <Route path="/character" element={<Character />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/armor/:armorId" element={<ViewArmor />} />
                <Route path="/weapon/:weaponId" element={<ViewWeapon />} />
                <Route
                  path="/accessory/:accessoryId"
                  element={<ViewAccessory />}
                />
                <Route path="/skill/:skillId" element={<ViewSkill /> } />
              </Routes>
              <Toaster position="top-center" gutter={2} />
            </div>
          </UserAccountContextProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
