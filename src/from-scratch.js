const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};
resolvedWrapper(10).then(console.log);

const rejectedWrapper = (message) => {
  return Promise.reject(new Error(message))
};

const handleResolvedPromise = (promise) => {
  return promise.then(value => {
    console.log(value);
    return value;
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then(value=> {
      console.log(value);
      return value
    })
    .catch(error => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    })
};

const pauseForMs = (ms) => {
  return new Promise(resolve =>{
    setTimeout(resolve, ms);
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
