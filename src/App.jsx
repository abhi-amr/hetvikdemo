import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Team from "./pages/Team/Team";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import PageNotFound from "./components/Errors/PageNotFound";
import Privacy from "./pages/Privacy/Privacy";
import TermsAndCondtions from "./pages/TermsAndCondtions/TermsAndCondtions";
import DisclaimerPage from "./pages/Disclaimer/DisclaimerPage";
import Questions from "./pages/Questions/Questions";
import ReactGA from "react-ga";
import endpoint from "./components/axios";
import * as Constants from "./components/Utilities/Constants";
import BlogHome from "./pages/Blog/Home";
import ActualBlog from "./pages/Blog/ActualBlog";
import SeeMore from "./pages/Blog/SeeMore";
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
  const [hiddenDiv, setHiddenDiv] = useState("");
  const sayHello = async () => {
    let response = await endpoint.get("PatnaUniversity");
    const info = response.data;
    setHiddenDiv(info);
  };
  useEffect(() => {
    //in production copy this to initialize
    //UA-196096069-1
    ReactGA.initialize("");

    //to report pageView
    ReactGA.pageview(window.location.pathname + window.location.search);
    sayHello();
  }, []);

  // usePageViews();

  return (
    <div className="App">
      <div hidden={true}>{hiddenDiv}</div>
      <div hidden={true}>{Constants.HIDDEN_DIV_KEYWORD}</div>
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
          <Route path="/blog" exact component={BlogHome} />
          <Route path="/blog/:id" exact component={ActualBlog} />

          <Route path="blog/category/:id" exact component={SeeMore} />

          <Route path="*" exact component={Home} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
