/* eslint-disable jsx-a11y/anchor-is-valid */

import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = ({ children, className, ...rest }) => (
  <NextLink {...rest}>
    <a className={className}>{children}</a>
  </NextLink>
);

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LinkComponent.defaultProps = {
  className: '',
};

export default LinkComponent;
