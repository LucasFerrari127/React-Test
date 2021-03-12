import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";
import React, { Component } from "react";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  // //acá hace cosas antes de que se haga el render.
  // componentWillMount() {
  //   console.log("componentWillMount() antes del render");
  // }

  // // despues del render.
  // componentDidMount() {
  //   console.log("luego del didmount");
  // }

  // // una vez que dejamos de ver el render
  // componentWillUnmount() {
  //   console.log("y se marchoooooooo");
  // }

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search,
    });
  }

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  render() {
    return (
      <>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
          onSubmit={this.onSubmit}
        ></SearchBar>
        <SearchResult busqueda={this.state.busqueda}></SearchResult>
      </>
    );
  }
}

export default PageSearchResult;
