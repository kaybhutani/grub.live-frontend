import React from "react";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>...Loading</h1>
    </div>
  );
};

export default React.memo(Loader);
