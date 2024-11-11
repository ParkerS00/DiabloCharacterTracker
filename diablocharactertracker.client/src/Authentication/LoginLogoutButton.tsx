import { useAuth } from "react-oidc-context";
import "../Styles/Global.css";
import { useEffect } from "react";

export default function LoginLogoutButton() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      const date = new Date(auth.user.expires_at ?? 0 * 1000);
      document.cookie = `auth_token${
        auth.user.id_token
      };expires=${date.toUTCString()}`;
    }
  }, [auth.user]);

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
