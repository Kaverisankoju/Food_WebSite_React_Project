import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={styles.nav}>
      <h2>Expense Tracker</h2>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}

const styles = {
  nav: {
    padding: "15px",
    background: "#1e293b",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Navbar;
