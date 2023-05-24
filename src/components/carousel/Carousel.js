import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import styled from "styled-components";

export default function Carouselcomponent() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getApi();
  });


  const getApi = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const Api = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setFilmes(Api);
      });
  };

  const ImgCarousel = styled.img`
    width: 18vw;
    height: 42vh;

    :hover {
      cursor: pointer;
      opacity: 60%;
    }
  `;

  const DivBoxCarousel = styled.div`
    div {
      background-color: black;
    }
  `;

  const TitleCarousel = styled.h1`
    color: white;
    font-size: 30px;
    padding: 20px;
  `;

  return (
    <>
      <TitleCarousel>Ultimos Lançamentos</TitleCarousel>
      <Carousel itemsToScroll={4} itemsToShow={4} itemPadding={[80, 3]}>
        {filmes.map((item) => (
          <DivBoxCarousel>
            <div>
              <ImgCarousel src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <h2>{item.release_date}</h2>
            </div>
          </DivBoxCarousel>
        ))}
      </Carousel>
    </>
  );
}
