import LoginLogoutButton from "./Authentication/LoginLogoutButton";
import "./Styles/Global.css";

function App() {
  return (
    <div className="flex">
      <h1 className="underline">Home</h1>
      <LoginLogoutButton></LoginLogoutButton>
    </div>
  );
}

export default App;
