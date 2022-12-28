import TagsStyled from "./Tags.styled";

const Tags = ({ bool, title }) => {
  return <TagsStyled bool={bool}>{title}</TagsStyled>;
};

export default Tags;
