// @flow
module.exports = function awaitHandler(promise: any) {
  return promise.then(res => ({ res }))
    .catch(err => ({ err }));
};
