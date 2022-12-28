import SearchHeaderStyled from "./SearchHeader.styled";
import foodChiefBg from "assets/images/foodchief.jpg";
import { SearchBar } from "components/molecules";

const Header = ({ handleClick }) => {
  return (
    <SearchHeaderStyled bg={foodChiefBg}>
      <SearchBar handleClick={handleClick} />
    </SearchHeaderStyled>
  );
};

export default Header;
