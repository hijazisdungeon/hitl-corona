import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);

  a {
    display: flex;
    width: 100%;
    padding: 20px 10px;

    text-align: center;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 700;

    color: #fff;
    background-color: rgba(72, 114, 199, 0.6);
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    a {
      width: 40vw;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

    a {
      width: 80vw;
    }
  }
`;
