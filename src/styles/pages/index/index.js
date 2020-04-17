import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 20px;
  text-align: center;

  background: url('/static/images/bg_home.jpg') no-repeat;
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
  margin-top: 60px;
  padding: 1.8rem 2rem;

  align-items: center;
  justify-content: center;

  font-size: 2.2rem;
  font-weight: 600;

  /* border-radius: 4rem; */
  color: #fff;
  background-color: #ed7d15;
  box-shadow: 0 3px 12px 2px rgba(0, 0, 0, 0.6);
  transition: box-shadow 300ms;

  svg {
    margin-left: 6px;
  }

  &:hover {
    /* filter: brightness(85%); */

    box-shadow: 0 0 12px 4px rgba(237, 125, 21, 0.6);
  }
`;
