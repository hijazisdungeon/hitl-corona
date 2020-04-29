import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url('/static/images/bg_home.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 130px;

  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 12rem;
    text-align: center;

    span {
      font-weight: bold;
      color: #ed7d15;
    }
  }
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
      top: -1.4rem;
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
