// Create a function that tells us how many days till Friday 

let date = new Date().getDay();

function calcDays (currDay, dayOfWeek) {
  return (7 + dayOfWeek - currDay) % 7;
}

function showTillFriday (currDay) {
  let daysLeft = calcDays(currDay, 5);

  if (daysLeft>=1) {
    console.log('Do piątku jeszcze ' + daysLeft + (daysLeft===1 ? ' dzień!' : ' dni!'));
  } else {
    console.log('Piątek, piąteczek, piątunio!');
  }
}

showTillFriday(date);