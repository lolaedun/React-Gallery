import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import "./styles.css";

const Header = styled("header")({
  padding: 16,
  backgroundColor: "hsl(0 0% 94%)"
});

const TileView = styled("div")((props) => ({
  display: "grid",
  padding: props.spacing,
  gridGap: props.spacing,
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}));

TileView.defaultProps = {
  spacing: 16,
  minCellWidth: 240
};

const Photo = styled("img")({
  display: "block",
  width: "100%",
  objectFit: "cover"
});

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
