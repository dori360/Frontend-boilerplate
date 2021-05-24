import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import One from "./pages/One";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={One} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Signup" component={Signup} exact />
        <Route path="/Signin" component={Signin} exact />
        <Route path="/Contact" component={Contact} exact />
        <Route path="/Faq" component={Faq} exact />
      </Switch>
    </Router>
  );
}

export default Routing;
