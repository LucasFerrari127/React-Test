import ArtistCard from "../components/artist-card.js";
import Loading from "../components/loading.js";
import Error from "../components/error.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class SearchResult extends Component {
  state = {
    error: null,
    busqueda: "",
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  // componentDidMount() {
  //   this.cargarClubes();
  // }
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=55289ba7ad01bbf336f10ab0c12f845f&format=json`
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  fetchData = async (url) => {
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
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
