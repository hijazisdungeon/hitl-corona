import PropTypes from 'prop-types';

import { Container } from './styles';

export const Switch = ({ isChecked, onClick, ...rest }) => (
  <Container active={isChecked} {...rest}>
    <button type="button" onClick={onClick}>
      <span />
    </button>
  </Container>
);

Switch.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  isChecked: false,
};
