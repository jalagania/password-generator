import checkIcon from "../assets/icon-check.svg";
import "./Options.css";

function Options() {
  return (
    <div className="options-box">
      <div className="option">
        <button className="btn-check" name="uppercase">
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Uppercase Letters</p>
      </div>
      <div className="option">
        <button className="btn-check">
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Lowercase Letters</p>
      </div>
      <div className="option">
        <button className="btn-check">
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Numbers</p>
      </div>
      <div className="option">
        <button className="btn-check">
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Symbols</p>
      </div>
    </div>
  );
}

export default Options;
