import { useEffect } from "react";
import { useGlobalContext } from "../context";
import "./Strength.css";

function Strength() {
  const { strength, setStrength, passwordLength, optionsArray } =
    useGlobalContext();

  useEffect(() => {
    if (passwordLength === 0) {
      setStrength("");
      return;
    }

    if (passwordLength < 5) {
      setStrength("too weak!");
    }

    if (passwordLength > 5) {
      setStrength("weak");
    }

    if (passwordLength > 9 || (passwordLength > 6 && optionsArray.length > 2)) {
      setStrength("medium");
    }

    if (
      passwordLength > 14 ||
      (passwordLength > 11 && optionsArray.length > 2)
    ) {
      setStrength("strong");
    }
  }, [passwordLength, optionsArray]);

  return (
    <div className="strength-box">
      <p>Strength</p>
      <div className={`bars-box ${strength.replace(/\W/g, "")}`}>
        <p>{strength}</p>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Strength;
