// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landing } from "./components/Landing/Landing";
import { Campaign } from "./components/Campaign/Campaign";
import { Catagory } from "./components/Catagory/Catagory";
import { CatagoryMsg } from "./components/Catagory/CatagoryMessage";
import { CountFundrais } from "./components/CountFundrais/CountFundrais";
import { TopFundraiser } from "./components/TopFundraiser/TopFundraiser";
import { SuccessfulFundraiser } from "./components/SuccessfulFundraiser/SuccessfulFundraiser";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { Partner } from "./components/Partner/Partner";
import { Footer } from "./components/Footer/Footer";
import { How } from "./components/HowItWork/How";
import { UserForm } from "./components/UserForm/UserForm";
import {FundRaiser} from './components/browsingfundraiser/fundraiser'
import {Help} from "./components/Help/Help"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Navbar />
        <Landing />
        <Campaign />
        <Catagory />
        <CatagoryMsg />
        <CountFundrais />
        <TopFundraiser />
        <SuccessfulFundraiser />
        <DownloadApp />
        <Partner />
        <Footer />
      </Route>

      <Route path="/start-fundraiser" exact>
        <Navbar />
        <UserForm />
      </Route>

      <Route path="/how-it-works" exact>
        <Navbar />
        <How />
        <Footer />
      </Route>

      <Route path="/fundraisers" exact>
        <Navbar />
        <FundRaiser />
        <Footer />
      </Route>

      <Route path="/fundraisers/help-patient" exact>
        <Navbar />
        <Help />
        <Footer />
      </Route>
    </Router>
  );
}

export default App;
