import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  color: #000;
`;

export const Header = styled.div`
  width: 100%;

  h1 {
    font-size: 5rem;
    color: #727573;
  }

  p {
    font-size: 1.5rem;
  }

  img {
    width: 5rem;
    margin: 6px;
    height: auto;
  }

  @media (max-width: 612px) {
    span {
      flex-direction: column;

      img {
        margin: 0;
        margin-top: 6px;
      }
    }
  }
`;

export const ItemsContainer = styled.div`
  margin: 30px 0;
`;

export const Item = styled.div`
  margin: 40px 0;

  p {
    font-size: 6rem;
    font-weight: bold;
  }

  span {
    font-size: 2rem;
    font-weight: bold;
  }

  &:first-child {
    p {
      font-size: 8rem;
    }
  }
`;
