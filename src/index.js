import React from "react";
import ReactDOM from "react-dom";

import { Header, TileView, Photo } from "./components";

import "./styles.css";

class App extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          images: data.slice(0, 30)
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header>
          <h1>&#128247; Picsum </h1>x
        </Header>
        <TileView>
          {this.state.images.map((image) => (
            <Photo
              key={image.id}
              src={`https://picsum.photos/1000/1000?image=${image.id}`}
            />
          ))}
        </TileView>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
