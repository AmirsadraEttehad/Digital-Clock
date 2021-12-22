// :)
let $ = document;



// select hour div
const hourElem = $.querySelector("#hour");

// select minute div
const minuteElem = $.querySelector("#minute");

// select second div
const secondsElem = $.querySelector("#second");

// set loop for each second
// the project refresh each second for receive new Data
setInterval(() => {

  // set date
  let time = new Date();

  // receive new data for use theme in some conditions

  // ======------======

  // Hour
  let nowHour = time.getHours();

  // Minute
  let nowMinute = time.getMinutes();

  // Second
  let nowSecond = time.getSeconds();

  // it's for sometimes when we have one digit numbers(Hours)
  if (nowHour < 10) {
    nowHour = "0" + nowHour;
  }
  
  // it's for sometimes when we have one digit numbers(Minutes)
  if (nowMinute < 10) {
    nowMinute = "0" + nowMinute;
  }

  // it'sf for sometimes when we have one digit numbers(Seconds)
  if (nowSecond < 10) {
    nowSecond = "0" + nowSecond;
  }


  // change 
  hourElem.innerHTML = nowHour;
  minuteElem.innerHTML = nowMinute;
  secondsElem.innerHTML = nowSecond;


}, 1000);
