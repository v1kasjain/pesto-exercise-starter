function flipArgs(callbackFunction) {
  return (...args) => callbackFunction(args.reverse());
}

export {
  flipArgs
}