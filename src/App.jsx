import React from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import GoalsMission from "./components/AboutUs/GoalsMission";
import Team from "./components/AboutUs/Team";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/about" exact component = {AboutUs} />
            <Route path = "/contact" exact component = {ContactUs} />
            
            
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
