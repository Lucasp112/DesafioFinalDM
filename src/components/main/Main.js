import { useState, useEffect } from "react";
import * as S from "../style";
import axios from "axios";
import styled from "styled-components";

export default function Main() {
  const [filmes, setFilmes] = useState([]);
  const [fundo, setFundo] = useState([]);

  useEffect(() => {
    getFilms();
  });

  const getFilms = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f383216c4211e48523bc807dab3c6d6&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          };
        });
        setFilmes(allApi);
        setFundo((prevState) => (prevState = filmes.slice(0, 1)));
      })
      .catch((error) => alert(`Desculpe ocorreu algum erro ${error}`));
  };

  const Divbox = styled.div`
    background-color: rgba(50, 62, 91 /1);
    backdrop-filter: blur(5px);
    h2 {
      color: whitesmoke;
      font-weight: 500;
    }
  `;

  return (
    <S.ContainerMain background={fundo.map((item) => item.poster)}>
      {fundo.map((item) => (
        <Divbox>
          <h2>{item.title}</h2>
          <h2>{item.release_date}</h2>
          <h2>{item.vote_average}/10</h2>
          <h2>{item.overview}</h2>
        </Divbox>
      ))}
      <S.DivButton>
        <button>Assistir Agora</button>
        <button>Trailer</button>
      </S.DivButton>
    </S.ContainerMain>
  );
}
