// Create a function that will return the current day name in Polish.
let date = new Date();
let day = date.getDay();

function showDay (dayNr) {
  switch (dayNr) {
    case 0:
      return 'niedziela';
      break;
    case 1:
      return 'poniedziałek';
      break;
    case 2:
      return 'wtorek';
      break;
    case 3:
      return 'środa';
      break;
    case 4:
      return 'czwartek';
      break;
    case 5:
      return 'piątek';
      break;
    case 6:
      return 'sobota';
      break;
    default:
      return ':)';
  }
}

console.log('Dziś jest ' + showDay(day));
