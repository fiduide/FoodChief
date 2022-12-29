import styled from "styled-components";

const RecipeStyled = styled.div`
  color: white;
  .left {
    max-width: 700px;
  }

  .right {
    margin-left: 20px;
    max-width: 400px;
  }

  h1,
  h2,
  h3,
  h4 {
    text-decoration: underline;
    text-underline-offset: 8px;
    margin: 15px 0;
  }

  .top-recipe .left .image-main {
    border: 1px solid #f55138;
  }

  .ingredients {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .equipment {
    margin: 5px 10px;
    img {
      max-width: 75px;
      max-height: 75px;
    }
    p {
      text-align: center;
    }
  }

  @media screen and (max-width: 1100px) {
    .left {
      padding: 0 15px;
      max-width: 100%;
    }

    .right {
      padding: 0 15px;
      max-width: 100%;
    }
  }
`;

export default RecipeStyled;
