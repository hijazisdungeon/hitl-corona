import NextLink from 'next/link';
import PropTypes from 'prop-types';

const defaultProps = [
  'href',
  'as',
  'passHref',
  'prefetch',
  'replace',
  'scroll',
];

export const Link = ({ children, ...rest }) => {
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

Link.propTypes = {
  children: PropTypes.node.isRequired,
};
