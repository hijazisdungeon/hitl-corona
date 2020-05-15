import styled from 'styled-components';

export const Container = styled.div`
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
      margin: 10px 0;
      font-size: 8rem;
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
      font-size: 3.5rem;

      span {
        color: #57bcff;
      }
    }

    & > span {
      margin-top: 40px;

      a {
        display: flex;
        padding: 10px;

        &,
        * {
          transition: color 200ms, border-color 200ms;
        }

        border-radius: 20px;
        border: 3px solid #57bcff;

        &:hover {
          border-color: #fff;

          * {
            color: #fff;
          }
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

  & > svg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    fill: #23272a;
  }

  div.title {
    display: flex;
    padding: 0 10px;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 30px;
      font-size: 4rem;
      color: #000;
    }

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  z-index: 2;

  justify-content: center;
  margin-top: 5px;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 50px;
  padding: 20px 40px;

  flex-direction: column;
  transition: transform 300ms;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 200px;
    height: 200px;
  }

  span {
    margin: 20px 0;
    padding: 10px 20px;

    font-size: 1.8rem;
    font-weight: 600;
    background-color: #006daa;
  }

  @media (max-width: 830px) {
    margin: 50px 0;
  }

  @media (max-width: 360px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px;

    svg {
      transition: color 200ms;
    }

    &:hover {
      svg {
        color: #061a40 !important;
      }
    }
  }
`;
