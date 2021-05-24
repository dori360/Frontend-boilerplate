import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import NavBar from "./components/NavBar";
import DropMenu from "./components/DropMenu";
import img from "./images/img.png";
import Home from "./components/pages/Home";

import Routing from "./components/routes";
import Container from "@material-ui/core/Container";

const style = {
  background: "#301934",
  fontFamily: "monospace",
};
// const divStyle = {
//   background: "white",
//   fontFamily: "monospace",
//   marginTop: 408,
// };

function App() {
  return (
    <>
      <div>
        <NavBar />

        <Routing />
      </div>
    </>
  );
}

export default App;
