import React, { useState } from "react";

function Calculator() {
  const [inputval, setinputval] = useState("");

  return (
    <div className="body">
      <div className="main_container">
        <div className="calculator">
          <input
            onChange={(e) => setinputval(e.target.value)}
            value={inputval}
            type="text"
            placeholder="0"
            id="inputBox" 
          />

        
            <div>
              <button
              class="button"
                value="1"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                1
              </button>
              <button
              class="button"
                value="2"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                2
              </button>
              <button
                value="3"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                3
              </button>
              <button
                value="+"
                class="button operator"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                +
              </button>
            </div>

            <div>
              <button
                value="4"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                4
              </button>
              <button
                value="5"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                5
              </button>
              <button
                value="6"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                6
              </button>
              <button
                value="-"
                class="button operator"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                -
              </button>
            </div>

            <div>
              <button
                value="7"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                -
              </button>
              <button
                value="8"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                8
              </button>
              <button
                value="9"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                9
              </button>
              <button
                value="*"
                class="button operator"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                *
              </button>
            </div>

            <div>
              <button  class="button operator" value="c" onClick={(e) => setinputval("")}>
                AC
              </button>
              <button
                value="0"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                0
              </button>
              <button
                value="00"
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                00
              </button>
              <button
                value="."
                class="button"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                .
              </button>
            </div>

            <div>
              <button
              class="button operator"
                value="/"
                onClick={(e) => setinputval(inputval + e.target.value)}
              >
                /
              </button>
              <button class="button operator"  onClick={() => setinputval(inputval.slice(0, -1))}>
                DEL
              </button>
              <button
                className="equalBtn"
                onClick={(e) => setinputval(eval(inputval))}
              >
                =
              </button>
            </div>



          </div>
        </div>
      </div>

  );
}

export default Calculator;
