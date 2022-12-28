import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  width: 100%;
  .block-center {
    padding-top: 155px !important;
    h1 {
      font-family: "Dancing Script", cursive;
      color: #df432a;
      font-size: 78px;
      text-align: center;
    }
    h2 {
      font-family: "Roboto", cursive;
      color: white;
      font-size: 84px;
      text-align: center;
    }
  }
`;

export default HeaderStyled;
