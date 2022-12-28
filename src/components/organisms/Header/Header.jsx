import HeaderStyled from "./Header.styled";
import foodChiefBg from "assets/images/foodchief.jpg";
import { SearchBar } from "components/molecules";

const Header = ({ handleClick }) => {
  return (
    <HeaderStyled bg={foodChiefBg}>
      <div className="block-center">
        <h1>Welcome to</h1>
        <h2>Food Chief</h2>
      </div>
      <SearchBar handleClick={handleClick} />
    </HeaderStyled>
  );
};

export default Header;
