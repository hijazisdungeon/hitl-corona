import styled from 'styled-components';

import { Link } from '~/components/Link';

export const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const Content = styled.section`
  position: relative;
  height: 100vh;
  height: 100vh;

  & > section {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }

  & > div {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 20px 40px;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));

    h1 {
      font-size: 10rem;
      text-align: center;

      @media (max-width: 515px) {
        display: flex;
        flex-direction: column;

        span {
          color: #b9d6f2;
        }
      }
    }

    p {
      margin-top: 10px;
      font-size: 4rem;
    }

    & > span {
      margin-top: 40px;

      a {
        display: flex;
        padding: 20px;

        border-radius: 50%;
        border: 4px solid #006daa;
        background-color: #0353a4;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
        transition: background-color 200ms;

        &:hover {
          background-color: #006daa;
        }
      }
    }
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: 120px 0;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c2f33;

  & > svg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    fill: #23272a;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  z-index: 2;
  max-width: 965px;
  margin: 0 auto;
  margin-top: 60px;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;

    & > div {
      padding: 40px 0;
    }
  }
`;

export const RowItem = styled.div`
  display: flex;
  width: 33.333%;
  padding: 0 40px;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 2rem;
  text-align: center;

  img {
    width: 100px;
    height: auto;
  }

  h3 {
    margin-top: 30px;
    color: #0099ff;
  }

  p {
    margin-top: 20px;
  }

  svg {
    color: #fff;
  }
`;

export const Button = styled(Link)`
  display: flex;
  width: 10rem;
  height: 4rem;
  margin-top: 30px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #1db954;
  transition: transform 200ms;

  &:hover {
    transform: translateY(-2px);
  }
`;
