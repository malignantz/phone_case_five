import { useEffect } from "react";
import db from "./../lib/db.js";
import { useAuth0 } from "@auth0/auth0-react";

function MyAccountComponent({ user }) {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getToken() {
      const accessToken = await getAccessTokenSilently();
      const config = {
        method: "POST",
        //cors: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          body: JSON.stringify({ some: "data" }),
        },
      };
      const resp = await fetch(
        "https://5nxfj428tj.execute-api.us-east-1.amazonaws.com/postCase",
        config
      );
      const data = await resp.json();
      console.log(data, user);
    }
    getToken();

    async function getUser() {}
    getUser();
  }, [getAccessTokenSilently]);

  return (
    <>
      <h2>{user.given_name}'s Account</h2>

      <img
        src={user.picture}
        referrerPolicy="no-referrer"
        alt="Profile avatar"
      />
      <ul>
        {db[user.email] &&
          db[user.email].map((listing) => <li key={listing}>{listing}</li>)}
      </ul>
    </>
  );
}
export default MyAccountComponent;
