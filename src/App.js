import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {} from "react-bootstrap";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import MovieDashboard from "./components/MovieDashboard/MovieDashboard";
import Header from "./components/Header/Header";
import FooterInfo from "./components/FooterInfo/FooterInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home query="top_rated" />
          </Route>
          <Route path="/home">
            <Home query="top_rated" />
          </Route>
          <Route path="/top_rated">
            <Home query="top_rated" />
          </Route>
          <Route path="/trending">
            <Home query="trending" />
          </Route>
          <Route path="/upcoming">
            <Home query="upcoming" />
          </Route>
          <Route path="/movie/:id">
            <Header />
            <MovieDashboard />
            <FooterInfo />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
