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
import Questions from "./pages/Questions/Questions";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/team" exact component={Team} />
          <Route path="/questions" exact component={Questions} />
          <Route path="/privacy" exact component={Privacy} />

          <Route path="/admin" exact component={Admin} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
