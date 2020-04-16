/* eslint-disable jsx-a11y/anchor-is-valid */

import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = [
  'href',
  'as',
  'passHref',
  'prefetch',
  'replace',
  'scroll',
];

const LinkComponent = ({ children, ...rest }) => {
  const nexLinkProps = defaultProps.reduce(
    (obj, prop) => Object.assign(obj, { [prop]: rest[prop] }),
    {},
  );

  return (
    <NextLink {...nexLinkProps}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LinkComponent.defaultProps = {
  className: '',
};

export default LinkComponent;
