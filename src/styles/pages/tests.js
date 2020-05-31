import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const NewsContainer = styled.div`
  position: relative;
  align-self: center;
`;

export const NewsItems = styled.div`
  width: 450px;
  padding: 5px;
  display: flex;
  position: relative;
  justify-content: center;

  border-radius: 3px;
  background: #e8e8e8;

  h1 {
    margin: 5px 5px;
    font-size: 2rem;
  }
  span {
    color: #a1a1a1;
  }

  img {
    width: 150px;
    height: auto;
  }
`;
