import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search-bar.js";
import React, { Component } from "react";
import "./page-artist.css";
import SimilarArtist from "../src/components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageArtist extends Component {
  state = {
    key: "",
    busqueda: "",
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
        bio: {},
      },
    },
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  // componentWillReceiveProps(e) {
  //   let termino = e.busqueda;
  //   this.fetchData(
  //     `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${termino}&api_key=55289ba7ad01bbf336f10ab0c12f845f&format=json`
  //   );
  // }

  componentDidMount() {
    this.fetchData();
    this.setState({
      key: 1,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }
  fetchData = async () => {
    let search = this.props.history.location.search.substr(1);

    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${search}&api_key=55289ba7ad01bbf336f10ab0c12f845f&format=json`;

    try {
      this.setState({
        loading: true,
      });
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
        });
      } else {
        this.setState({
          loading: false,
          data: data,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMensaje: error.message,
      });
    }
  };

  render() {
    return (
      <>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
          key={true}
        ></SearchBar>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row  centrar margenes50">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[4]["#text"]}
                className="pic-artist"
                alt=""
              />
              <h2>{this.state.data.artist.name}</h2>
              <p> {this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>
      </>
    );
  }
}

export default PageArtist;
