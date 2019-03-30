groupAdultsByAgeRange = (adultInfo) => {
  if (adultInfo.length < 1) {
    return {};
  }
  
  groups = adultInfo.reduce(adult => {
    if (adult.age < 18) {
      return {};
    } else {
      
      const from18to20 = adultInfo.filter((adult) => adult.age >= 18 && adult.age <= 20);
      const from21to30 = adultInfo.filter((adult) => adult.age > 20 && adult.age <= 30);
      const from31to40 = adultInfo.filter((adult) => adult.age > 30 && adult.age <= 40);
      const from41to50 = adultInfo.filter((adult) => adult.age > 40 && adult.age <= 50);
      const above50 = adultInfo.filter((adult) => adult.age > 50);
    
      const ageGroups = {
        '20 and younger': from18to20,
        '21-30': from21to30,
        '31-40': from31to40,
        '41-50': from41to50,
        '51 and older': above50,
      }

      
      return (ageGroups);
    }
  })
   return groups;
}

// const data = [
//   { name: "pete", age: 10 },
//   { name: "dove", age: 17 },
//   { name: "dave", age: 18 },
//   { name: "hall", age: 19 },
//   { name: "donn", age: 20 },
//   { name: "trey", age: 21 },
//   { name: "hann", age: 29 },
//   { name: "chew", age: 30 },
//   { name: "cloe", age: 31 },
//   { name: "dart", age: 39 },
//   { name: "this", age: 40 },
//   { name: "dame", age: 41 },
//   { name: "henk", age: 49 },
//   { name: "anna", age: 50 },
//   { name: "olga", age: 51 },
//   { name: "bert", age: 52 },
//   { name: "oldd", age: 120 },
// ]

// const test = groupAdultsByAgeRange(data)
// console.log(test)

// console.log(typeof groupAdultsByRange);
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;