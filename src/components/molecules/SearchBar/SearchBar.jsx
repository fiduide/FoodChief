import SearchBarStyled from "./SearchBar.styled";
import searchImg from "assets/images/search.png";

const SearchBar = ({ handleClick }) => {
  return (
    <SearchBarStyled>
      <div className="input-controller">
        <input
          id="searchInput"
          type="text"
          placeholder="Choissisez votre recette"
        />
        <div className="icon-box">
          <button onClick={() => handleClick()}>
            <img src={searchImg} alt="search-icon" />
          </button>
        </div>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
