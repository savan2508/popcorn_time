import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { tempMovieData, tempWatchedData } from "./data/movieData";
import { ListBox, MovieList } from "./components/ListBox";
import { WatchedMovieList, WatchedSummery } from "./components/WatchedBox";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar movies={movies} />
      <Container>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <ListBox>
          <>
            <WatchedSummery watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        </ListBox>
        {/*<WatchedBox />*/}
      </Container>
    </>
  );
}
