import styled from "styled-components";

export const ContainerMain = styled.div`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 110vh;
  width: 100%;
  padding: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const DivButton = styled.div`
  position: relative;
  top: 20px;
  width: 30%;
  height: 7vh;
  display: flex;
  justify-content: space-between;

  button {
    border-radius: 35px;
    width: 49%;
    height: 100%;
    background-color: orangered;
    color: white;
    font-size: 1.2em;
    font-weight: 700;

    :hover {
      cursor: pointer;
      opacity: 50%;
      transition: 1.2s;
    }

    :nth-child(2) {
      background-color: gray;
    }
  }
`;
