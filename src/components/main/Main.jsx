import "./main.css";
import dollarSign from "../../images/icon-dollar.svg";
import { useState } from "react";

export const Main = () => {
  const [is5, setIs5] = useState(false);
  const [is10, setIs10] = useState(false);
  const [is15, setIs15] = useState(true);
  const [is25, setIs25] = useState(false);
  const [is50, setIs50] = useState(false);

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
              <button className={is5 ? "button-active" : null}>5%</button>
              <button className={is10 ? "button-active" : null}>10%</button>
              <button className={is15 ? "button-active" : null}>15%</button>
              <button className={is25 ? "button-active" : null}>25%</button>
              <button className={is50 ? "button-active" : null}>50%</button>
              <input placeholder="Custom" />
            </div>
          </div>
          <label className="left__input-people">
            Number of People
            <input className="people-input type=" text />
          </label>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
};
