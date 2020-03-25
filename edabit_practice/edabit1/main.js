//Given a number between 1 and 12, return the corresponding month

var arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function monthName(number) {
  var adjustedNumber = number - 1;

  var month = arrayMonths[adjustedNumber]

  console.log(month);
}

monthName(9);
