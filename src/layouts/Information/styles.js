import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 80px;
  padding: 0 40px;

  align-items: center;
  justify-content: space-between;
  background-color: #006daa;

  a {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
    }

    span {
      margin-left: 5px;
      color: #fff;
    }

    &:hover {
      img {
        filter: brightness(90%);
      }

      strong {
        filter: brightness(90%);
      }
    }
  }

  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (max-width: 612px) {
    padding: 0 20px;
  }
`;

export const Content = styled.main`
  display: flex;
  width: 100%;
  max-width: 1024px;
  min-height: calc(100vh - 150px);
  margin: 35px auto;
  padding: 0 20px;

  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: calc(100vh - 130px);
  }
`;
