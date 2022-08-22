import styled from "@emotion/styled";

export const Header = styled("header")({
  padding: 16,
  backgroundColor: "hsl(0 0% 94%)"
});

export const TileView = styled("div")((props) => ({
  display: "grid",
  padding: props.spacing,
  gridGap: props.spacing,
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}));

TileView.defaultProps = {
  spacing: 16,
  minCellWidth: 240
};

export const Photo = styled("img")({
  display: "block",
  width: "100%",
  objectFit: "cover"
});
