import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  object-fit: cover;

  opacity: ${props => (props.selected ? 1 : 0)};
  transition: opacity 800ms;
`;
