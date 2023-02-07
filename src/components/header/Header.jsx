import "./header.css";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <h1>Tip Calculator Hidden h1</h1>
        <img src={logo} alt="logo" />
      </header>
    </>
  );
};
