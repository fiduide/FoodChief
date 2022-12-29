import styled from "styled-components";

const RecipeStyled = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px;
  transition: ease-in-out all 0.25s;
  h2 {
    padding: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 21px;
  }
  .secondTitle {
    font-weight: 400;
    text-align: center;
    font-size: 10px;
  }
  img {
    border-radius: 15px;
    max-width: 300px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export default RecipeStyled;
