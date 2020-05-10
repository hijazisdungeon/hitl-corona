import styled from 'styled-components';

export const Container = styled.footer`
  padding: 60px 80px;
  background-color: #23272a;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    margin: 40px 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    padding: 15px 20px;
    border-radius: 2px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    background-color: #0353a4;
    transition: transform 200ms;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 660px) {
    flex-direction: column;

    a {
      margin-top: 20px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 60px;
  }

  h3 {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 1.8rem;
  }

  a {
    padding: 2px 0;
    font-weight: 500;
    font-size: 1.2rem;
    color: hsla(0, 0%, 100%, 0.6);
    transition: color 200ms;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 660px) {
    align-items: center;

    & + div {
      margin: 0;
      margin-top: 40px;
    }
  }
`;
