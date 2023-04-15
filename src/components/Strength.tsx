import { useGlobalContext } from "../context";
import "./Strength.css";

function Strength() {
  const { strength } = useGlobalContext();

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
