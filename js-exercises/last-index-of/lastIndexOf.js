
function lastIndexOf(...args) {
  const list = args[1];
  const itemToSearch = args[0];
  return list.lastIndexOf(itemToSearch);
}

export {
  lastIndexOf,
};
