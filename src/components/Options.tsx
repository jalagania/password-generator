import checkIcon from "../assets/icon-check.svg";
import { useGlobalContext } from "../context";
import "./Options.css";

function Options() {
  const { optionsArray, setOptionsArray } = useGlobalContext();

  function handleCheckbox(event: React.MouseEvent<HTMLButtonElement>): void {
    const element = event.target as HTMLButtonElement;
    if (optionsArray.includes(element.name)) {
      element.classList.remove("selected");
      setOptionsArray((prevState) => {
        return prevState.filter((el) => el !== element.name);
      });
    } else {
      element.classList.add("selected");
      setOptionsArray((prevState) => {
        return [...prevState, element.name];
      });
    }
  }

  return (
    <div className="options-box">
      <div className="option">
        <button className="btn-check" name="uppercase" onClick={handleCheckbox}>
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Uppercase Letters</p>
      </div>
      <div className="option">
        <button className="btn-check" name="lowercase" onClick={handleCheckbox}>
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Lowercase Letters</p>
      </div>
      <div className="option">
        <button className="btn-check" name="numbers" onClick={handleCheckbox}>
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Numbers</p>
      </div>
      <div className="option">
        <button className="btn-check" name="symbols" onClick={handleCheckbox}>
          <img src={checkIcon} alt="check" />
        </button>
        <p>Include Symbols</p>
      </div>
    </div>
  );
}

export default Options;
