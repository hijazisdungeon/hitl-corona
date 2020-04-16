import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 20px;
  text-align: center;

  background: linear-gradient(rgba(255, 255, 255, 0.1), rgb(0, 0, 0)),
    url('/static/images/bg_home.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 12rem;
    text-align: center;

    span {
      font-weight: bold;
      color: #ed7d15;
    }
  }
`;

export const StatesButton = styled(Link)`
  display: flex;
  margin-top: 15px;
  padding: 2rem;

  align-items: center;
  justify-content: center;

  font-size: 2.2rem;
  font-weight: 600;

  border-radius: 4rem;
  color: #fff;
  background-color: #1db954;
  transition: filter 300ms;

  .countries {
    color: #ed3232;
  }

  svg {
    margin-left: 6px;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
