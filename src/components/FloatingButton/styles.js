import styled from 'styled-components';

export const Container = styled.button`
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 60px;
  right: 40px;
  text-align: center;

  @media (max-width: 425px) {
    padding: 0 13px;
  }
`;
