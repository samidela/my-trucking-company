import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { NoMatch } from "./Components/NoMatch";
import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Jumbotron } from "./Components/Jumbotron";
import { Dispatch } from "./Components/Services/Dispatch";
import { Biennial } from "./Components/Services/Biennial";
import { CabCard } from "./Components/Services/CabCard";
import { CarrierPacket } from "./Components/Services/CarrierPacket";
import { form2290 } from "./Components/Services/form2290";
import { Ifta } from "./Components/Services/Ifta";
import { UcrRegistration } from "./Components/Services/UcrRegistration";
import { JobApplication } from "./Components/FutureDrivers/JobApplication";
import { EligibilityCheck } from "./Components/FutureDrivers/EligibilityCheck";
import { BOL } from "./Components/CurrenDrivers/BOL";
import { Login } from "./Components/CurrenDrivers/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/Servics/Biennial" component={Biennial} />
              <Route path="/Services/CabCard" component={CabCard} />
              <Route path="/Services/CarrierPacket" component={CarrierPacket} />
              <Route path="/Services/Dispatch" component={Dispatch} />
              <Route path="/Services/form2290" component={form2290} />
              <Route path="/Services/Ifta" component={Ifta} />
              <Route
                path="/FutureDrivers/JobApplication"
                component={JobApplication}
              />
              <Route
                path="/FutureDrivers/EligibilityCheck"
                component={EligibilityCheck}
              />
              <Route
                path="/Services/UcrRegistration"
                component={UcrRegistration}
              />
              <Route path="/CurrentDrivers/BOL" component={BOL} />
              <Route path="/CurrentDrivers/Login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
