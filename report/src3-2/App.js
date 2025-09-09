import "./App.css";
import { Component } from "react";
import Vegetables from "./components/Vegetables";
import DATAS from "./components/DATAS";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vegetables datas={DATAS} />
      </div>
    );
  }
}

export default App;
