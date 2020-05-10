import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  align-self: center;

  span {
    position: absolute;
    display: flex;
    height: 100%;
    left: 0;
    top: 0;
    padding-left: 15px;

    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${props => props.theme.inputIcon};
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 15px;
  padding-left: calc(2.5rem + 30px);

  border-radius: 4px;
  border: 2px solid rgba(255, 255, 255, 0.4);

  background: ${props => props.theme.backgroundInput};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  transition: border-color 200ms;

  &,
  &::placeholder {
    color: #979ea6;
  }

  :focus {
    border-width: 2px;
    border-color: #7289da;
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  a {
    display: flex;
    width: 300px;
    padding: 20px 10px;
    margin: 20px;

    text-align: center;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 700;

    color: ${props => props.theme.optionsContentText};
    background-color: ${props => props.theme.optionsContent};
    border-radius: 6px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.15);
    transition: transform 200ms;

    img {
      width: 30px;
      height: auto;
      margin-left: 8px;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 15px 5px rgba(72, 114, 199, 0.4);
    }
  }
`;
