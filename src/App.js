import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Component } from "react";
import Layout from "./components/layout.js";

// se agrega el exact antes del path para que entre solo si el path es exacto.

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
