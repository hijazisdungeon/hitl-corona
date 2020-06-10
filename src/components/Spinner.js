import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerComponent = ({ color = '#0353a4' }) => <Container color={color} />;

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: 3px solid transparent;
  border-top: 3px solid ${props => props.color};
  border-left: 3px solid ${props => props.color};

  animation: ${spinnerAnimation} 1s linear infinite;
`;

SpinnerComponent.propTypes = {
  color: PropTypes.string,
};

SpinnerComponent.defaultProps = {
  color: '#0353a4',
};

export default SpinnerComponent;
