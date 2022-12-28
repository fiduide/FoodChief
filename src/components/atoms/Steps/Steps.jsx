import StepsStyled from "./Steps.styled";

const Steps = ({ step }) => {
  return (
    <StepsStyled>
      <div className="left">{step.number}</div>
      <div className="right">
        {step.ingredients != "" && (
          <>
            <h5>
              <u>ingredients</u> :
            </h5>
            <ul>
              {step.ingredients.map((element) => (
                <li>
                  <i>- {element.name}</i>
                </li>
              ))}
            </ul>
          </>
        )}
        <p>{step.step}</p>
        {step.equipment != "" && (
          <>
            <h5>
              <u>Use equipment</u> :
            </h5>
            <div className="list-equipment d-flex wrap align-items-center">
              {step.equipment.map((element) => (
                <div className="equipment">
                  <img
                    src={`https://spoonacular.com/cdn/equipment_100x100/${element.image}`}
                    alt={element.image}
                  />
                  <p>
                    <i>{element.name}</i>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </StepsStyled>
  );
};

export default Steps;
