import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const App = () => {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <div
      className="text-center w-100 bg-dark text-white"
      style={{
        height: "100vh",
      }}
    >
      {!isAuthenticated ? (
        <button
          className="btn btn-primary mt-4"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      ) : (
        <div>
          <img src={user.picture} alt={user.name} className="mt-4" />
          <h2 className="mt-4">{user.name}</h2>
          <p className="mt-4">{user.email}</p>
          <button
            className="btn btn-outline-danger mt-2"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
