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

const queryClient = new QueryClient();

function App() {
  return (
    <>
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
            </Routes>
          </div>
        </UserAccountContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
