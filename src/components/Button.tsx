import { generate } from "generate-password-ts";
import { useGlobalContext } from "../context";
import "./Button.css";

function Button() {
  const { setPassword, passwordLength, optionsArray } = useGlobalContext();

  function handleGenerate() {
    const lowercase = optionsArray.length === 0 ? true : false;
    const password = generate({
      length: passwordLength,
      uppercase: optionsArray.includes("uppercase"),
      lowercase: optionsArray.includes("lowercase") || lowercase,
      numbers: optionsArray.includes("numbers"),
      symbols: optionsArray.includes("symbols"),
    });
    setPassword(password);
  }

  return (
    <button className="btn-generate" onClick={handleGenerate}>
      <span>Generate</span>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
      </svg>
    </button>
  );
}

export default Button;
