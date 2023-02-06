import "./main.css";
import dollarSign from "../../images/icon-dollar.svg";

export const Main = () => {
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
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input placeholder="Custom" />
            </div>
          </div>
          <label className="left__input-people">
            Number of People
            <input className="people-input type="text />
          </label>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
};
