import "./Range.css";

function Range() {
  return (
    <div className="range-box">
      <div className="range-header">
        <p className="range-text">Character Length</p>
        <p className="range-amount">10</p>
      </div>
      <input
        type="range"
        min={1}
        max={20}
        defaultValue={0}
        className="range-slider"
      />
    </div>
  );
}

export default Range;
