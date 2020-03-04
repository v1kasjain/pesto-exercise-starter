const limitFunctionCallCount = (callBack, nTimes) => {
  let functionCallCount = 1;
  return (...args) => {
    if (functionCallCount < nTimes) {
      functionCallCount++;
      return callBack(...args);
    } else {
      return null;
    }
  };
};

export {
  limitFunctionCallCount,
};
