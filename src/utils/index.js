export function objectLocaleString(object) {
  if (!(object instanceof Object)) return object;

  return Object.entries(object).reduce(
    (objectKeys, [key, value]) =>
      Object.assign(objectKeys, { [key]: value.toLocaleString() }),
    {},
  );
}
