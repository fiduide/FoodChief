import styled from "styled-components";

const TagsStyled = styled.div`
  background-color: ${(props) => (props.bool == true ? "#df432a" : "none")};
  border: 1px solid ${(props) => (props.bool == true ? "#df432a" : "white")};
  color: white;
  width: fit-content;
  margin: 10px 5px;
  padding: 1px 10px;
  border-radius: 8px;
`;

export default TagsStyled;
