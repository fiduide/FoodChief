import styled from "styled-components";

const SecondHeaderStyled = styled.header`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 100%;
`;

export default SecondHeaderStyled;
