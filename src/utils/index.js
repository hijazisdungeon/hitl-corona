export function isLocalhost(uri) {
  return Boolean(
    uri === 'localhost' ||
      uri === '[::1]' ||
      uri.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
  );
}

export function insertPathFromOrigin(path = '') {
  return `/${path}`;
}

export function objectLocaleString(object) {
  if (!(object instanceof Object)) return object;

  return Object.entries(object).reduce(
    (objectKeys, [key, value]) =>
      Object.assign(objectKeys, { [key]: value.toLocaleString() }),
    {},
  );
}
