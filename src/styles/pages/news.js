import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ArticleItem = styled.div`
  cursor: help;
  display: flex;
  position: relative;
  width: 100%;
  max-width: 450px;
  padding: 20px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  border-radius: 5px;
  margin: 15px 20px;

  box-shadow: 0 1px 20px 4px rgba(0, 109, 170, 0.3);
  background-color: rgba(6, 26, 64, 0.8);
  transition: background-color 200ms;

  img {
    position: absolute;
    opacity: 0.6;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    border-radius: 5px;
    transition: opacity 200ms;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.1;
  }

  p {
    margin: 15px 0;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
  }

  a {
    display: flex;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fc5044;

    svg {
      margin-left: 6px;
    }
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;
