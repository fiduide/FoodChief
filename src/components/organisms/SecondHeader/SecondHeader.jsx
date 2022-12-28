import SecondHeaderStyled from "./SecondHeader.styled";
import foodChiefBg from "assets/images/foodchief.jpg";
import { NavigationBar, SearchBar } from "components/molecules";

const SecondHeader = () => {
  return (
    <SecondHeaderStyled bg={foodChiefBg}>
      <NavigationBar />
    </SecondHeaderStyled>
  );
};

export default SecondHeader;
