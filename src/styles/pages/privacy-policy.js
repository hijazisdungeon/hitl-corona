import styled from 'styled-components';

export const Container = styled.div`
  padding: 140px 80px;
  background-color: #0353a4;

  h1 {
    padding: 15px 0;
    font-size: 4rem;
  }

  ol {
    counter-reset: item 0;

    & > li {
      position: relative;
      display: block;
      margin-top: 40px;

      &:before {
        content: counters(item, '.') '. ';
        position: absolute;
        counter-increment: item 1;
        left: 0;
        font-size: 2rem;
        font-weight: 700;
      }

      h2 {
        font-size: 2rem;
        text-indent: 4rem;
        font-weight: 700;
      }

      p {
        font-size: 1.8rem;
        line-height: 1.6;
        margin: 10px 0;
        text-align: justify;

        a {
          color: #e0e0e0;

          &:hover {
            border-bottom: 1px solid #e0e0e0;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 140px 20px;
  }
`;
