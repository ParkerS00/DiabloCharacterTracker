import { Navbar } from "../Components/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Armor from "./Armor";
import Weapons from "./Weapons";
import Accessories from "./Accessories";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/armor" element={<Armor />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
