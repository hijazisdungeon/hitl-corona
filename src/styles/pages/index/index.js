import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  text-align: center;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('/static/images/bg_home.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.section`
  display: flex;
  height: 100vh;
  height: 100vh;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 10rem;
    text-align: center;

    @media (max-width: 478px) {
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
`;

export const Section = styled.section`
  display: flex;
  height: 100vh;
  height: 100vh;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  justify-content: center;

  div + div {
    margin-left: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div + div {
      margin: 0;
      margin-top: 60px;
    }
  }
`;

export const RowItem = styled.div`
  display: flex;
  width: 25rem;
  height: 25rem;
  padding: 20px;
  cursor: help;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.35);
  background-color: rgba(0, 109, 170, 0.9);
  border: 3px solid #b9d6f2;
  transition: transform 300ms;

  span {
    position: relative;
    width: 100%;

    p {
      position: absolute;
      opacity: 0;
      top: -100px;
      transition: all 200ms;
    }
  }

  p {
    font-size: 2rem;
    font-weight: 500;

    &.subject {
      position: relative;
      margin: 15px 0;
      top: 0;
    }
  }

  img {
    width: 5rem;
    height: auto;
  }

  &:hover {
    transform: translateY(-10px);

    p.subject {
      display: none;
    }

    span {
      p {
        display: block;
        opacity: 1;
        top: 0;
      }
    }

    img {
      display: none;
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  width: 10rem;
  height: 4rem;

  align-items: center;
  justify-content: center;

  border-radius: 5%;
  box-shadow: 0 4px 15px 8px rgba(6, 26, 64, 0.35);
  background-color: #061a40;
  color: #fff;
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 0 0 18px 15px rgba(6, 26, 64, 0.35);
  }
`;
