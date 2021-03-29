var dayOfTheWeek = (day, month, year) => {
    return new Date(year, month - 1, day).toLocaleString("en-US", {
      weekday: "long",
    });
  };
  
  console.log(dayOfTheWeek(3, 29, 2021));