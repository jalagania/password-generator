import "./App.css";

import Display from "./components/Display";
import Range from "./components/Range";
import Options from "./components/Options";
import Strength from "./components/Strength";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Display />
        <Range />
        <Options />
        <Strength />
        <Button />
      </div>
    </div>
  );
}

export default App;
