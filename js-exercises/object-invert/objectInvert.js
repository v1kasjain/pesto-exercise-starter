function objectInvert(...args) {
  const objectToInvert  = args[0];
  var invertedObject = {}
  Object.keys(objectToInvert).forEach((key) => {
    invertedObject[objectToInvert[key]] = key;
  })
  return invertedObject;
}

export {
  objectInvert,
};
