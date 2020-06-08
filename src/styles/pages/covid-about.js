import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 80px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 6rem;
    color: #006daa;
    padding: 15px 0;
  }
  ol {
    & > li {
      position: relative;
      display: block;
      margin-top: 40px;

      &:before {
        position: absolute;
        left: 0;
        font-size: 2rem;
      }

      h2 {
        color: #006daa;
        font-size: 2.8rem;
        text-indent: 4rem;
        font-weight: 700;
      }

      p {
        font-size: 1.9rem;
        line-height: 2;
        margin: 10px 0;
        text-align: justify;
        color: #000;
      }
    }
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  img {
    background-color: #b9d6f2;
    width: 200px;
    height: auto;
    border-radius: 50%;
  }
  p {
    font-size: 1.9rem;
    margin: 10px 0;
    text-align: justify;
    color: #000;
  }
`;
