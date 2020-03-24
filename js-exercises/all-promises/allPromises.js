const allPromises = args => {
  if (!args) {
    return Promise.resolve();
  } 
  const resultPromise = [];
  args.forEach((element, index) => {
    if (element instanceof Promise) {
      element.then((value) => {
        resultPromise[index] = value;
      });
    } else {
      resultPromise[index] = element;
    }  
  });
  return new Promise((resolve) => {
    resolve(resultPromise);
  });
};

export { allPromises };
