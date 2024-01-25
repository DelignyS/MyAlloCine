import React, { useState, useEffect } from "react";
import Modal from "react-modal";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
}

const SearchForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const openModal = (movie: any) => {
    fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=abd2c79b`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentMovie(data);
        setModalIsOpen(true);
      })
      .catch((error) => console.error("Error:", error));
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (title !== "") {
      fetch(`http://www.omdbapi.com/?s=${title}&apikey=abd2c79b`)
        .then((response) => response.json())
        .then((data) => setResults(data.Search || []))
        .catch((error) => console.error("Error:", error));
    }
  }, [title]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTitle((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {results.map((movie, index) => (
          <div className="cell" key={index}>
            <div className="card">
              <div className="card-section">
                <img src={movie.Poster} alt={movie.Title} />
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
                <button onClick={() => openModal(movie)}>Read more</button>
              </div>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Movie Details"
          ariaHideApp={false}
        >
          <button onClick={closeModal}>X</button>
          {currentMovie && (
            <>
              <h2>{currentMovie.Title}</h2>
              <img src={currentMovie.Poster} alt={currentMovie.Title} />
              <p>{currentMovie.Plot}</p>
              <p>
                <strong>{currentMovie.Year}</strong>
              </p>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};
//
export default SearchForm;
