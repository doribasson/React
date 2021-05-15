import { useState, useContext } from "react";
import { AppContext } from "../context/main";

function OtherPage() {
  const { state } = useContext(AppContext);
  return (
    <div>
      <br />
      <span>iam othePage</span>
      <div> in otherPage state is: {state.name}</div>
    </div>
  );
}

export default OtherPage;
