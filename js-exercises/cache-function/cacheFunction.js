function cacheFunction(callbackFunction) {
  let cache = {};
  return (...args) => {
    if (!cache[args[0]]) {
      cache[args[0]] = true;
      return callbackFunction(...args);
    }
  }

}

export {
  cacheFunction,
};
