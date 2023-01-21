import React from "react";

function Avatar({ name }) {
  return (
    <div
      style={{
        backgroundColor: "hotpink",
        // padding: "1.5em",
        borderRadius: "20000px",
        height: "3em",
        width: "3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <b style={{ fontSize: "30px", color: "#fff" }}>
        {name.slice(0, 1).toUpperCase()}
      </b>
    </div>
  );
}

export default Avatar;
