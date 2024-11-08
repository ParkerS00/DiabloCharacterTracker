import { useAuth } from "react-oidc-context";
import "../Styles/Global.css";

export default function LoginLogoutButton() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return (
        <div className="text-blood-200 rounded-md text-md font-medium">
          Signing you in...
        </div>
      );
    case "signoutRedirect":
      return (
        <div className="text-blood-200 rounded-md text-md font-medium">
          Signing you out...
        </div>
      );
  }

  if (auth.isLoading) {
    return (
      <div className="text-blood-200 rounded-md text-md font-medium">
        Loading...
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="text-blood-200 rounded-md text-md font-medium">
        Oops... {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div className="text-blood-200 rounded-md text-md font-medium">
        Hello {auth.user?.profile.name}
        <button
          onClick={() => void auth.removeUser()}
          className=" hover:text-slate-50 pl-2"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => void auth.signinRedirect()}
      className="text-blood-200 hover:text-slate-50 rounded-md text-md font-medium"
    >
      Log in
    </button>
  );
}
