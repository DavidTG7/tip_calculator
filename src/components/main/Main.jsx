import "./main.css";
import { useState } from "react";
import { Amount } from "./amount/Amount";

let percentageStates = {
  5: false,
  10: false,
  15: true,
  25: false,
  50: false,
  custom: false,
};

export const Main = () => {
  const [isActive, setIsActive] = useState(percentageStates);

  const handleClick = (e) => {
    const value = e.target.innerText.replace("%", "");
    for (let item in percentageStates) {
      if (value == item) {
        percentageStates[item] = true;
      } else {
        percentageStates[item] = false;
      }
    }
    setIsActive({ ...percentageStates });
  };

  const handleCustom = () => {
    for (let item in percentageStates) {
      percentageStates[item] = false;
    }
    percentageStates["custom"] = true;

    setIsActive({ ...percentageStates });
  };

  return (
    <>
      <main>
        <div className="left">
          <label className="left__input-bill">
            Bill
            <input className="bill-input" type="text" />
          </label>
          <div className="left__tip-options">
            <h2>Select Tip %</h2>
            <div className="left__tip-options_buttons">
              <button
                className={isActive[5] ? "button-active" : null}
                onClick={handleClick}
              >
                5%
              </button>
              <button
                className={isActive[10] ? "button-active" : null}
                onClick={handleClick}
              >
                10%
              </button>
              <button
                className={isActive[15] ? "button-active" : null}
                onClick={handleClick}
              >
                15%
              </button>
              <button
                className={isActive[25] ? "button-active" : null}
                onClick={handleClick}
              >
                25%
              </button>
              <button
                className={isActive[50] ? "button-active" : null}
                onClick={handleClick}
              >
                50%
              </button>
              <input
                className={isActive.custom ? "custom-active" : null}
                onChange={handleCustom}
                placeholder="Custom"
                // value={false}
              />
            </div>
          </div>
          <label className="left__input-people">
            Number of People
            <input className="people-input type=" type="text" />
          </label>
        </div>
        <div className="right">
          <Amount type="Tip Amount" value="$0.00"/>
          <Amount type="Total" value="$0.00"/>
        </div>
      </main>
    </>
  );
};
