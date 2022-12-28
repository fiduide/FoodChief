import styled from "styled-components";

const StepsStyled = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  margin: 15px 0;
  width: 100%;
  .left {
    display: flex;
    align-items: center;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    padding: 15px;
    background-color: #df432a;
    color: white;
    font-weight: 900;
  }

  .right {
    padding: 15px 0;
    h5 {
      font-weight: 700;
    }
    ul {
      li {
        text-transform: capitalize;
        font-size: 13px;
      }
    }
    p {
      margin: 10px 0;
    }
  }
`;

export default StepsStyled;
