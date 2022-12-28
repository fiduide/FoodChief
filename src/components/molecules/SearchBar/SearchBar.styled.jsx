import styled from "styled-components";

const SearchBarStyled = styled.div`
  max-width: 600px;
  position: absolute;
  bottom: -28px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .input-controller {
    position: relative;
    .icon-box {
      position: absolute;
      top: -12px;
      right: 10px;
      background-color: #f55138;
      border: none;
      border-radius: 100%;
      transition: ease-in-out all 0.25s;
      button {
        padding: 10px;
        border: none;
        background-color: transparent;
        img {
          width: 25px;
          height: 25px;
        }
      }
      &:hover {
        background-color: #e0452d;
        transform: scale(1.1);
      }
    }

    input {
      padding: 5px 8px 5px 0;
      width: 80%;
      border: none;
      border-bottom: 1px solid gray;
      &:focus {
        transform: scaleY(1.1);
        outline: none;
      }
    }
  }
`;

export default SearchBarStyled;
