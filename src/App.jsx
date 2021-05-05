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
import QFilter from "./components/QPaper/QFilter";
import Questions from "./pages/Questions/Questions";
import Admin from "./pages/Admin/Admin";
import AddProgramme from "./components/Admin/AddProgramme";
import AddSubject from "./components/Admin/AddSubject";
import UploadForm from "./components/Admin/UploadForm";
import Question from "./pages/Questions/Questions";
import SignIn from "./pages/LoginLogout/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <AddProgramme />
        <AddSubject /> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/team" exact component={Team} />
          <Route path="/questions" exact render={() => <Question />} />

          <Route path="/admin" exact component={Admin} />
          <Route path="/upform" exact component={UploadForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
