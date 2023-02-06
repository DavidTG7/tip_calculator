import "./amount.css";

export const Amount = ({ type, value }) => {
  return (
    <div className="amount__container">
      <div className="amount__type">
        <h3>{type}</h3>
        <p>/ person</p>
      </div>
      <p>{value}</p>
    </div>
  );
};
