module.exports = function awaitHandler(promise) {
  return promise.then(res => ({ res }))
    .catch(err => ({ err }));
};
