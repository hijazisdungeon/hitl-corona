import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  text-align: center;
  justify-content: center;
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
      font-size: 8rem;
      text-align: center;
      @media (max-width: 515px) {
        display: flex;
        flex-direction: column;
      }
    }
    p {
      font-size: 3rem;
      span {
        color: #57bcff;
      }
    }
    & > span {
      margin-top: 30px;
      a {
        display: flex;
        padding: 10px;

        border-radius: 20%;
        border: 2px solid #006daa;
        &:hover {
          transition-duration: 400ms;
          border-color: #fff;
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
  align-items: Center;
  justify-content: center;
  background-color: #f5f5f5;

  h1 {
    font-size: 4rem;
    color: #000;
    margin-bottom: 5px;
  }
  & > svg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    fill: #23272a;
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5px;
`;

export const Row = styled.div`
  width: 25rem;
  margin: 60px 50px;
  transition: transform 300ms;
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 20%;
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
  background: #006daa;
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
export const BrandIcons = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    align-items: center;
    margin: 5px;
  }
`;
