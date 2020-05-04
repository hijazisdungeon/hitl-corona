import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.listInformationText};
`;

export const NewsContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;

  span {
    background: #fff;
    border-radius: 8px;
    position: relative;
    font-size: 3rem;
    font-weight: bold;
    padding: 20px;

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
`;
