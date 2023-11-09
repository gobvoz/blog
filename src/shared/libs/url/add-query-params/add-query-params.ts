const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.set(key, value);
  });

  return `?${searchParams.toString()}`;
};

const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};

export { addQueryParams, getQueryParams };
