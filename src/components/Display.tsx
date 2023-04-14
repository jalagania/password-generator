import iconCopy from "../assets/icon-copy.svg";
import "./Display.css";

function Display() {
  return (
    <div className="display-box">
      <p className="password-text">P4$5W0rD!</p>
      <button className="btn-copy">
        <img src={iconCopy} alt="copy" />
      </button>
    </div>
  );
}

export default Display;
