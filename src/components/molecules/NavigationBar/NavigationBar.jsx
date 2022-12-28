import NavigationBarStyled from "./NavigationBar.styled";

const NavigationBar = () => {
  return (
    <NavigationBarStyled>
      <a className="btn btn-outline-oranged" href="/foodchief/">
        Back home
      </a>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
