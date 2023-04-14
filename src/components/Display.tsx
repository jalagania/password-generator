import iconCopy from "../assets/icon-copy.svg";
import { useGlobalContext } from "../context";
import "./Display.css";

function Display() {
  const { password } = useGlobalContext();

  function handleCopy() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="display-box">
      <p className={`password-text ${password ? "white" : ""}`}>
        {password || "P4$5W0rD!"}
      </p>
      <button className="btn-copy" onClick={handleCopy}>
        <img src={iconCopy} alt="copy" />
      </button>
    </div>
  );
}

export default Display;
