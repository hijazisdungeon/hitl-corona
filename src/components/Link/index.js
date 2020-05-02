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
  const nextLinkProps = defaultProps.reduce(
    (obj, prop) => Object.assign(obj, { [prop]: rest[prop] }),
    {},
  );

  return (
    <NextLink {...nextLinkProps}>
      <a {...rest} href={rest.as || rest.href}>
        {children}
      </a>
    </NextLink>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkComponent;
