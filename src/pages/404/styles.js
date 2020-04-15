import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 20px;
  text-align: center;

  background: linear-gradient(rgba(3, 83, 164, 0.3), rgba(0, 0, 0, 0.3)),
    url('/static/images/bg_404.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16rem;
    font-weight: 900;
  }

  h3 {
    font-size: 4rem;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  margin-top: 50px;
  padding: 15px;
  font-size: 1.8rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  background-color: #006daa;
  transition: transform 200ms;

  svg {
    margin-right: 6px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
