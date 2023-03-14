import NavBarComponent from "./components/NavBarComponent.jsx";
import Footer from "./components/FooterComponent.jsx";
import CartComponent from "./components/CartComponent.jsx";
import PhoneCaseListComponent from "./components/PhoneCaseListComponent.jsx";
import AboutComponent from "./components/AboutComponent.jsx";
import MyAccountComponent from "./components/MyAccountComponent.jsx";
//import RequireAuthComponent from './components/RequireAuthComponent.jsx';
import { AuthenticationGuardComponent } from "./components/AuthenticationGuardComponent.jsx";
import { Route, Routes } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import { useState } from "react";
import ListPhoneComponent from "./components/ListPhoneComponent.jsx";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/myaccount",
      },
    });
  };

  //console.log(isAuthenticated);
  let indexer = function () {
    let i = 0;
    return () => i++;
  };
  let getIndex = indexer();

  let data = {
    title: "Caseology Parallax",
    img: "phoneCase.webp",
    desc: "This is a sample phone case available for purchase!",
    phoneName: "iPhone 13",
  };

  const [cart, setCart] = useState([]);

  function handleAdd(itemName) {
    setCart([...cart, itemName]);
  }

  return (
    <>
      <NavBarComponent
        itemCount={cart.length}
        handleLogin={handleLogin}
        logout={logout}
        isAuthenticated={isAuthenticated}
      />

      {!isLoading && (
        <Routes>
          <Route
            path="/"
            element={
              <PhoneCaseListComponent
                getIndex={getIndex}
                handleAdd={handleAdd}
                data={data}
              />
            }
          />
          <Route path="/cart" element={<CartComponent items={cart} />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/list" element={<ListPhoneComponent />} />
          <Route
            path="/myaccount"
            element={
              <AuthenticationGuardComponent
                component={MyAccountComponent}
                user={user}
              />
            }
          />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
