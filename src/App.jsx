import React from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Team from "./components/AboutUs/CoreTeam";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./components/Errors/PageNotFound";
import Admin from "./pages/Admin/Admin";
import Privacy from "./pages/Privacy/Privacy";
import TermsAndCondtions from "./pages/TermsAndCondtions/TermsAndCondtions";
import DisclaimerPage from "./pages/Disclaimer/DisclaimerPage";
import Questions from "./pages/Questions/Questions";
import { createHistory } from 'history'

//see if it works
// const history = useRouterHistory(createHistory)({
//   basename: '/hetvikdemo'
// })



function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/team" exact component={Team} />
          <Route path="/questions" exact component={Questions} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={TermsAndCondtions} />
          <Route path="/disclaimer" exact component={DisclaimerPage} />

          <Route path="/admin" exact component={Admin} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
