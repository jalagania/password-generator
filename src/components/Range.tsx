import { ChangeEvent, useRef } from "react";
import { useGlobalContext } from "../context";
import "./Range.css";

function Range() {
  const { setPasswordLength, passwordLength } = useGlobalContext();
  const rangeRef = useRef<HTMLInputElement>(null);

  function handleRangeInput(event: ChangeEvent<HTMLInputElement>): void {
    setPasswordLength(+event.target.value);
    const percent = (+event.target.value * 100) / +event.target.max;
    rangeRef.current!.style.backgroundImage = `linear-gradient(90deg, #a4ffaf ${percent}%, transparent ${percent}%)`;
  }

  return (
    <div className="range-box">
      <div className="range-header">
        <p className="range-text">Character Length</p>
        <p className="range-amount">{passwordLength}</p>
      </div>
      <input
        type="range"
        min={0}
        max={20}
        step={1}
        defaultValue={0}
        className="range-slider"
        onChange={handleRangeInput}
        ref={rangeRef}
      />
    </div>
  );
}

export default Range;
