import Cookies from "universal-cookie"; // Importing the cookies library
import * as jose from "jose";

const cookies = new Cookies(); // Creating a new instance

export default async function GetUser() {
  const JWKS = jose.createRemoteJWKSet(
    new URL(
      "https://auth.snowse.duckdns.org/realms/advanced-frontend/protocol/openid-connect/certs"
    )
  );

  const jwt_value = cookies.get("jwt_token"); // Accessing the cookie directly from the instance

  console.log("jwt_value: ", jwt_value);

  try {
    const { payload, protectedHeader } = await jose.jwtVerify(
      jwt_value ?? "",
      JWKS,
      {
        issuer: "https://auth.snowse.duckdns.org/realms/advanced-frontend",
        audience: "account",
      }
    );

    console.log(protectedHeader);
    console.log(payload);

    if (typeof payload.email === "string") {
      return payload.email;
    } else {
      throw new Error("Email not found in JWT payload.");
    }
  } catch (error) {
    console.error("JWT verification failed:", error);
    throw new Error("Failed to retrieve user email.");
  }
}
