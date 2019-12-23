import React from "react";

export default function ErrorMessage({
errorMessage
}) {
  return (
    <div style={{ marginTop: "10px" }}>
      <p style={{ color:"red" }}>{errorMessage}</p>
    </div>
  );
}
