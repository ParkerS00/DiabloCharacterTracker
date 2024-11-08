import { Navbar } from "./Components/Nav";
import "./Styles/Global.css";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-blood-800 to-blood-950">
      <Navbar></Navbar>
      <div className="flex mt-16">
        <div>
          <img
            className="w-full h-auto"
            src="/D4_LilithWallpaper_1920x1200_16x10_png_jpgcopy.jpg"
            alt="Lillith"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
