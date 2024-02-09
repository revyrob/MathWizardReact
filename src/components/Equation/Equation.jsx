import React from "react";

function Equation() {
  return (
    <div>
      <div>{/* {number_given} x {unknown_num} = {given_sum} */}</div>
      <div className="keyboard_module-nums">
        <div>{/* row with 1,2,3 */}</div>
        <div>{/* row with 4, 5, 6 */}</div>
        <div>{/* row with 7, 8, 9 */}</div>
        <div>{/* row with 0 */}</div>
      </div>
    </div>
  );
}

export default Equation;
