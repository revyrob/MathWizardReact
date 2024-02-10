import React from "react";

function Equation({ num }) {
  console.log(num);
  let maxMultiTable = 10;
  let number_given = Math.floor(Math.random() * num);
  let unknown_num = Math.floor(Math.random() * maxMultiTable);
  let given_sum = number_given * unknown_num;
  console.log(unknown_num);

  return (
    <div>
      <div className="equation__row">
        <div>{number_given} x </div>
        <input />
        <div> = {given_sum}</div>
      </div>
      <div className="equation__keyboard">
        <div>
          <button
            class="Keyboard-module_row"
            data-key="1"
            aria-label="add 1"
            aria-disabled="false"
          >
            1
          </button>
          <button
            class="Keyboard-module_row"
            data-key="2"
            aria-label="add 2"
            aria-disabled="false"
          >
            2
          </button>
          <button
            class="Keyboard-module_row"
            data-key="3"
            aria-label="add 3"
            aria-disabled="false"
          >
            3
          </button>
        </div>
        <div>
          {" "}
          <button
            class="Keyboard-module_row"
            data-key="4"
            aria-label="add 4"
            aria-disabled="false"
          >
            4
          </button>
          <button
            class="Keyboard-module_row"
            data-key="5"
            aria-label="add 5"
            aria-disabled="false"
          >
            5
          </button>
          <button
            class="Keyboard-module_row"
            data-key="6"
            aria-label="add 6"
            aria-disabled="false"
          >
            3
          </button>
        </div>
        <div>
          {" "}
          <button
            class="Keyboard-module_row"
            data-key="7"
            aria-label="add 7"
            aria-disabled="false"
          >
            7
          </button>
          <button
            class="Keyboard-module_row"
            data-key="8"
            aria-label="add 8"
            aria-disabled="false"
          >
            8
          </button>
          <button
            class="Keyboard-module_row"
            data-key="9"
            aria-label="add 9"
            aria-disabled="false"
          >
            9
          </button>
        </div>
        <div>
          <button
            class="Keyboard-module_row"
            data-key="0"
            aria-label="add 0"
            aria-disabled="false"
          >
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default Equation;
