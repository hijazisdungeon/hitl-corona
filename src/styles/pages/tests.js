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

  border-radius: 5px;
  background: #e8e8e8;
  margin: 10px;

  h1 {
    margin: 5px 5px;
    font-size: 2rem;
    p {
      font-size: 1.5rem;
      padding: 5px;
      font-weight: 200;
      color: #a1a1a1;
    }
  }

  a {
    display: flex;
    align-items: center;
    margin: 20px;
    justify-content: flex-end;
    color: #0a8cf7;
    margin-top: 50px;
    border-bottom: 1px solid #0a8cf7;
  }
  a:hover {
    transition: 800ms;
    color: #0adbf7;
  }

  img {
    width: 150px;
    height: auto;
  }
`;
