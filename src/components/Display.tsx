import iconCopy from "../assets/icon-copy.svg";
import "./Display.css";

function Display() {
  function handleCopy() {
    console.log("copied!");
  }

  return (
    <div className="display-box">
      <p className="password-text">P4$5W0rD!</p>
      <button className="btn-copy" onClick={handleCopy}>
        <img src={iconCopy} alt="copy" />
      </button>
    </div>
  );
}

export default Display;
