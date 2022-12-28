import styled from "styled-components";

const IngredientsStyled = styled.div`
  background-color: white;
  color: black;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px 10px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }
  .secondTitle {
    font-weight: 400;
    text-align: center;
    font-size: 10px;
  }
  img {
    min-width: 50px;
    width: 100%;
  }
`;

export default IngredientsStyled;
