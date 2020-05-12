export function loadAnalytics() {
  if (typeof window !== 'undefined') {
    window.gtag('config', 'UA-166173584-1', {
      page_location: document.location.pathname,
      page_title: document.title,
    });
  }
}

export function objectLocaleString(object) {
  if (!(object instanceof Object)) return object;

  return Object.entries(object).reduce(
    (objectKeys, [key, value]) =>
      Object.assign(objectKeys, { [key]: value.toLocaleString() }),
    {},
  );
}
