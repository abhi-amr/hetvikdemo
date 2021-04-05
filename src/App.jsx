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
import PageNotFound from "./components/Errors/PageNotFound";
import QFilter from './components/QPaper/QFilter';
import Questions from "./pages/Questions/Questions";
import Admin from "./pages/Admin/Admin";
import AddProgramme from "./components/Admin/AddProgramme"
import AddSubject from "./components/Admin/AddSubject"
import Question from "./pages/Questions/Questions";
// import AddProgramme from "./components/TestPurpose/AddProgrammeWithBasicBootstrap"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <AddProgramme />
        <AddSubject /> */}
          <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/about" exact component = {AboutUs} />
            <Route path = "/contact" exact component = {ContactUs} />
            <Route path = "/team" exact component = {Team} />
            <Route path = "/questions" exact component = {Question} />

            <Route path = "/admin" exact component = {Admin} />
            
            
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
