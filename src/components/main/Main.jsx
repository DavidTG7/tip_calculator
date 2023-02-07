import "./main.css";
import { useEffect, useState } from "react";
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
  const [customValue, setCustomValue] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [percentage, setPercentage] = useState("15");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const tipAmountCalculator = (billValue, percentageValue, people) => {
    const totalTip = (
      (Number(billValue) * Number(percentageValue)) /
      100 /
      Number(people)
    ).toFixed(2);

    setTipAmount(totalTip);
  };

  const totalAmountCalculator = (tip, billAmount, people) => {
    const totalAmountPerPerson = (
      (Number(billAmount) / Number(people)) +
      Number(tip)
    ).toFixed(2);
    setTotalAmount(totalAmountPerPerson);
  };
  
  useEffect(() => {
    tipAmountCalculator(billAmount, percentage, peopleAmount);
    totalAmountCalculator(tipAmount, billAmount, peopleAmount);
    if (!billAmount.length || !peopleAmount.length) {
      setTipAmount("0.00");
      setTotalAmount("0.00");
    }
  }, [billAmount, peopleAmount, percentage, tipAmount]);

  const handleBillAmountChange = (e) => {
    const billAmount = e.target.value;
    setBillAmount(billAmount);
  };

  const handlePeopleAmountChange = (e) => {
    const peopleAmount = e.target.value.replaceAll("-", "");
    setPeopleAmount(peopleAmount);
  };

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
    setCustomValue("");
    setPercentage(value);
  };

  const handleCustomChange = (e) => {
    const customValue = e.target.value;
    setCustomValue(customValue);
    for (let item in percentageStates) {
      percentageStates[item] = false;
    }
    percentageStates["custom"] = true;

    setIsActive({ ...percentageStates });
    setPercentage(customValue);
  };

  const handleResetClick = () => {
    setBillAmount("");
    setPeopleAmount("");
    setCustomValue("");
    setPercentage("15");

    for (let item in percentageStates) {
      percentageStates[item] = false;
    }
    percentageStates[15] = true;

    setIsActive({ ...percentageStates });
  };

  return (
    <>
      <main>
        <div className="left">
          <label className="left__input-bill">
            Bill
            <input
              className="bill-input"
              placeholder="0"
              type="number"
              min="1"
              value={billAmount}
              onChange={handleBillAmountChange}
            />
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
                className={`custom-input ${
                  isActive.custom ? "custom-active" : null
                }`}
                type="number"
                min="1"
                onChange={handleCustomChange}
                placeholder="Custom"
                value={customValue}
              />
            </div>
          </div>
          <label className="left__input-people">
            Number of People
            <input
              className="people-input"
              placeholder="0"
              min="1"
              type="number"
              value={peopleAmount}
              onChange={handlePeopleAmountChange}
            />
          </label>
        </div>
        <div className="right">
          <Amount type="Tip Amount" value={`$${tipAmount}`} />
          <Amount type="Total" value={`$${totalAmount}`} />
          <button onClick={handleResetClick} className="right__button">
            RESET
          </button>
        </div>
      </main>
    </>
  );
};
