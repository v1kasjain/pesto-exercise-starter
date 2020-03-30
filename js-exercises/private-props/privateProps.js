function privateProps(obj, isPrivate) {
  const handler = {
    get(target, keyName) {
      if (isPrivate(keyName)) {
        return false;
      }
      let value = target[keyName];
      return (typeof value === 'function') ? value.bind(target) : value;
    },
    set(target, keyName, val) {
      if (isPrivate(keyName)) {
        return false;
      } else {
        target[keyName] = val;
        return true;
      }
    },
    has(target, keyName) {
      if ((keyName in target) && isPrivate(keyName)) {
        return false;
      }
    },
    deleteProperty(target, keyName) {
      if (isPrivate(keyName)) {
        return false;
      } else {
        delete target[keyName];
        return true;
      }
    },
    ownKeys(target) {
      return Object.keys(target).filter(keyName => !isPrivate(keyName));
    },
  }
  return new Proxy(obj, handler);
}

export { privateProps };