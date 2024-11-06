import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { ReactNode } from "react";
import GetUser from "./getUserService";

//https://auth.snowse.duckdns.org/realms/advanced-frontend/.well-known/openid-configuration
const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "Parker-Final",
  redirect_uri:
    process.env.NODE_ENV === "production"
      ? "https://parkerdiablo.duckdns.org/"
      : "http://localhost:5173/",

  onSigninCallback: async (user) => {
    const newURL = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newURL);
    console.log("setting cookie", user?.access_token);

    document.cookie = `jwt_token = ${user?.access_token}`;
    GetUser();
  },
};

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
}
