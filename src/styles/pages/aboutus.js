import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/static/images/aboutus/background.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export const Header = styled.header`
  margin-top: 120px;
  img {
    width: 20rem;
    height: auto;
  }
  p {
    margin-top: 20px;
    font-size: 4rem;
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 80px;
`;

export const Row = styled.div`
  width: 25rem;
  margin: 30px 50px;
  transition: transform 300ms;
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    transform: translateY(-2px);
  }
  @media (max-width: 300px) {
    margin: 30px 0;
  }
`;

export const Brands = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.3);
  background: #0353a4;
  span {
    font-size: 2rem;
    font-weight: 500;
    span {
      color: #000;
      font-weight: 600;
    }
  }
  a:hover {
    svg {
      color: #b9d6f2 !important;
    }
  }
`;
