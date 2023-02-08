import { useEffect, useState } from "react";
import db from "./../lib/db.js";
import { useAuth0 } from "@auth0/auth0-react";

function MyAccountComponent({ user }) {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const accessToken = await getAccessTokenSilently();
      if (accessToken) {
        setToken(accessToken);
      }
    }
    getToken();

    async function getUser() {
      const resp = await fetch("https://reqres.in/api/users/2");
      const data = await resp.json();
      console.log(data);
    }
    getUser();
  }, [getAccessTokenSilently]);

  return (
    <>
      <h2>{user.given_name}'s Account</h2>

      <img src={user.picture} alt="Profile avatar" />
      <ul>
        {db[user.email] &&
          db[user.email].map((listing) => <li key={listing}>{listing}</li>)}
      </ul>
      <p>{token}</p>
    </>
  );
}
export default MyAccountComponent;
