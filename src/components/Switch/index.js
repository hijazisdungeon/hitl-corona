import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

const SwitchComponent = ({ isChecked, onClick, ...rest }) => (
  <Container active={isChecked} {...rest}>
    <button type="button" onClick={onClick}>
      <span />
    </button>
  </Container>
);

SwitchComponent.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

SwitchComponent.defaultProps = {
  isChecked: false,
};

export default React.memo(SwitchComponent);
