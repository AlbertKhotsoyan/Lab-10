import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function registered() {
    if (localStorage.getItem("registered")) {
      return true;
    } else return false;
  }
  function logOut() {
    localStorage.removeItem("registered");
    window.location.reload();
  }
  return (
    <div className="header">
      <Link className="btn btn-dark" to="/">
        Main{" "}
      </Link>
      <Link className="btn btn-dark" to="/sign-in">
        Sign-in
      </Link>
      <Link className="btn btn-dark" to="/profile">
        Profile
      </Link>
      {registered() ? (
        <button onClick={() => logOut()} class="btn btn-dark">
          LogOut
        </button>
      ) : null}
    </div>
  );
};

export default Header;
