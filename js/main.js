let $ = document;
const hourElem = $.querySelector("#hour");
const minuteElem = $.querySelector("#minute");
const secondsElem = $.querySelector("#second");

setInterval(() => {
  let time = new Date();

  let nowHour = time.getHours();
  let nowMinute = time.getMinutes();
  let nowSecond = time.getSeconds();

  if (nowHour < 10) {
    nowHour = "0" + nowHour;
  }
  if (nowMinute < 10) {
    nowMinute = "0" + nowMinute;
  }
  if (nowSecond < 10) {
    nowSecond = "0" + nowSecond;
  }

  hourElem.innerHTML = nowHour;
  minuteElem.innerHTML = nowMinute;
  secondsElem.innerHTML = nowSecond;

  
}, 1000);
