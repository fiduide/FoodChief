import styled from "styled-components";

const SearchHeaderStyled = styled.header`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 25vh;
  width: 100%;
`;

export default SearchHeaderStyled;
