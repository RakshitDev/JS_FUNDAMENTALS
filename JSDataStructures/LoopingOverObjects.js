// Looping over Object :keys , values, entrie
// even thought they are not iterable we can loop over them

const openingHours = {
  mon: {
    open: 9,
    cloese: 12,
  },
  tue: {
    open: 9,
    cloese: 12,
  },
  wed: {
    open: 9,
    cloese: 12,
  },
  thrus: {
    open: 9,
    cloese: 12,
  },
  fri: {
    open: 9,
    cloese: 12,
  },
  sat: {
    open: 9,
    cloese: 12,
  },
  sun: {
    open: 9,
    cloese: 12,
  },
};

// 1)Object Keys
for (const days of Object.keys(openingHours)) {
  console.log(days);
}
// 2 values
for (const days of Object.values(openingHours)) {
  console.log(days);
}

// Entries
for (const days of Object.entries(openingHours)) {
  console.log(days);
}
