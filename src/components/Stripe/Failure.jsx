import React, { useState } from "react";
import { Link } from "react-router-dom";

const Failure = () => {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1 style={{ color: "Red" }}>Payment Failed!</h1>
          <p style={{ color: "black" }}>Please contact support</p>
          <p style={{ color: "black" }}>Your transaction with stripe has failed</p>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Back to Home
      </Link>
    </div>
  );
};



export default Failure;
