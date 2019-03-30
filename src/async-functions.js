function giveItBackLater(value, callback) {
  function laterEnough() {
    callback(value)
  }
  setTimeout(laterEnough, 20);
};

function addSomePromises(somePromise) {
  const p = new Promise(() => {
    val1 = somePromise
    somePromise
      .then(resolve(val1, val1))
      .then(reject(val1, val1, val1))
      .catch(err => "error")
  })
  return p;  
}

function promiseToGiveItBackLater(value) {
  const promise = new Promise((resolve, reject) => {
    resolve(value)
  })
  return promise;
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }