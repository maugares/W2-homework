function giveItBackLater(value, callback) {
  function laterEnough() {
    callback(value)
  }
  setTimeout(laterEnough, 20);
};

function addSomePromises(somePromise) {
  // new Promise((resolve, reject) => console.log(somePromise))
  //   .then() =>
}

function promiseToGiveItBackLater(value) {
  const promise = new Promise((resolve, reject) => {
    resolve(value)
  })
  return promise;
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }

// giveItBackLater("TotallyAwesomeValue", value => console.log(value))
// promiseToGiveItBackLater("Tresting the other one")


const rejectedPromise = Promise.reject("failure")
const p1 = addSomePromises(Promise.resolve("success")),
  p2 = addSomePromises(rejectedPromise)
// catch rejection to avoid warning
rejectedPromise.catch(() => null)

console.log(p1)
console.log(p2)