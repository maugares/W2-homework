const {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
} = require("./async-functions")

console.log(giveItBackLater("TotallyAwesomeValue", value => console.log(value)))