import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Team from "./pages/Team/Team";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import PageNotFound from "./components/Errors/PageNotFound";
import Privacy from "./pages/Privacy/Privacy";
import TermsAndCondtions from "./pages/TermsAndCondtions/TermsAndCondtions";
import DisclaimerPage from "./pages/Disclaimer/DisclaimerPage";
import Questions from "./pages/Questions/Questions";
import ReactGA from "react-ga";
//import InitializeReactGA from "./components/InitializeReactGA";

// function usePageViews() {
// 	//const location = useLocation();
// 	useEffect(() => {
// 		InitializeReactGA(ReactGA);
// 		ReactGA.set({ page: window.location.pathname });
// 		ReactGA.pageview(window.location.pathname);
// 	}, [window.location]);
// }

function App() {
  const prgGet = () => {
    let url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/Programme";
    fetch(url).then((response) => response.json());
  };
  useEffect(() => {
    //in production copy this to initialize
    //UA-196096069-1
    ReactGA.initialize("");

    //to report pageView
    ReactGA.pageview(window.location.pathname + window.location.search);
    prgGet();
  }, []);

  // usePageViews();

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
          <Route path="/terms" exact component={TermsAndCondtions} />
          <Route path="/disclaimer" exact component={DisclaimerPage} />

          <Route path="*" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
