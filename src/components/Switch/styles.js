import styled, { css } from 'styled-components';

export const Container = styled.div`
  button {
    display: flex;
    width: 7.2rem;
    height: 3.6rem;

    align-items: center;
    border-radius: 100px;
    background-color: #888888;
    transition: background-color 200ms;

    span {
      position: relative;
      width: 2.4rem;
      height: 2.4rem;
      left: 0.6rem;

      border-radius: 50%;
      background-color: #fff;
      transition: left 300ms;
    }

    ${props => {
      return (
        props.active &&
        css`
          background-color: #0353a4;

          span {
            left: 4.2rem;
          }
        `
      );
    }}
  }
`;
