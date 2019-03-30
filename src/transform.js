groupAdultsByAgeRange = (adultInfo) => {
  if (adultInfo.length < 1) {
    return {};
  }

  const groups = adultInfo.reduce(adult => {
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

      function removeEmpty(obj) {
        Object.keys(obj).forEach(function (key) {
          if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key])
          else if (obj[key] == null) delete obj[key]
        });
      };

      removeEmpty(ageGroups)
      
      return (ageGroups);
    }
  })
  return groups;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;