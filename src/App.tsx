import "./App.css";

import Display from "./components/Display";
import Range from "./components/Range";
import Options from "./components/Options";
import Strength from "./components/Strength";
import Button from "./components/Button";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Display />
        <div className="app-body">
          <Range />
          <Options />
          <Strength />
          <Button />
        </div>
        <Attribution />
      </div>
    </div>
  );
}

export default App;
