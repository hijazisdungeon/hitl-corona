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
        color: ${props => props.theme.paragrafos};
      }
    }
  }
`;
export const ImageContainer = styled.div`
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  & > div {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
    img {
      background-color: #d4d2d2;
      width: 200px;
      height: auto;
      border-radius: 50%;
    }
    p {
      font-size: 1.9rem;
      margin: 10px;
      color: ${props => props.theme.paragrafos};
    }
  }
`;
