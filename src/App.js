import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import NavBar from "./components/NavBar";
import Lyrics from "./components/Lyrics";
import Search from "./components/Search";
import Index from "./components/Index";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer />
        <Search />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
