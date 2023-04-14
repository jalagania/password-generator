import "./App.css";
import Attribution from "./components/Attribution";
import Button from "./components/Button";
import Display from "./components/Display";
import Options from "./components/Options";
import Range from "./components/Range";
import Strength from "./components/Strength";

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
