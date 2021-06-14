import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";

const Recommends = (props) => {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              movie.type === "recommend" && (
                <Wrap key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              )
            );
          })}
      </Content>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              movie.type === "original" && (
                <Wrap key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              )
            );
          })}
      </Content>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              movie.type === "trending" && (
                <Wrap key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              )
            );
          })}
      </Content>
      <h4>New</h4>
      <Content>
        {movies &&
          movies.map((movie) => {
            return (
              movie.type === "new" && (
                <Wrap key={movie.id}>
                  <Link to={`/details/${movie.id}`}>
                    <img src={movie.cardImg} alt="" />
                  </Link>
                </Wrap>
              )
            );
          })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

export default Recommends;
