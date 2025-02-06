import React, { useState } from "react";

const lazzchild = () => {
  const [state_fuc, setStatefu] = useState("ranji");
  const fun = (param) => {
    setStatefu(() => {
      const newValue = param;
      console.log("Updated count:", param);
      const ls = JSON.parse(localStorage.getItem("credentials"));
      console.log(ls);
      console.log(0);
      if (newValue) {
        console.log(ls);
        return newValue;
      } else {
      }
    });
  };

  return (
    <div>
      <button type="button" onClick={() => fun("jj")}>
        {" "}
        click
      </button>

      <div>lazzchild</div>
      <h2>I'm a lazily loaded component! 🚀</h2>
    </div>
  );
};

export default lazzchild;
