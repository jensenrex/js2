// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time  (Anonymous function)
// 2. That prints “I’m ready” after 5 seconds. (Anonymous function)
// hint; you may wish to research the Date object to get the current date!

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

let currentDateTime = () => { 
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
}
