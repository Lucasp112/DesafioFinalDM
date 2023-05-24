import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getApi();
  });

  const getApi = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setFilmes(allApi);
      });
  };

  const Images = styled.div`
    img {
      width: 20vw;
      height: 45vh;
      :hover {
        cursor: pointer;
        opacity: 50%;
      }
    }
    height: 65vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
  `;

  const Boxfilms = styled.div`
    background-color: black;
    width: 100%;
    height: 400vh;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
  `;

  const ButtonsDiv = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      width: 35px;
      height: 35px;
      background-color: black;
      color: #ffffff;
      border-radius: 50%;
      border: solid white;

      :hover {
        cursor: pointer;
        background-color: white;
        color: black;
      }
    }
  `;

  const Title = styled.h1`
    color: white;
    font-size: 30px;
    padding: 20px;
  `;

  return (
    <>
      <Title>Em Alta</Title>
      <Boxfilms>
        {filmes.map((item) => (
          <>
            <Images>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <h3>{item.release_date}</h3>
            </Images>
          </>
        ))}
      </Boxfilms>
      <ButtonsDiv>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>25</button>
        </div>
      </ButtonsDiv>
    </>
  );
}
