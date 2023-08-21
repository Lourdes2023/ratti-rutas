import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();

  return (
    <div style={{ marginTop: "23vh" }}>
      <h1>¡Gracias {username} por contactarnos!</h1>
    </div>
  );
}

export default User;
