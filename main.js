timer = setInterval(function() {
  timeBetweenDates();
}, 1000);

function timeBetweenDates() {
  var dt = new Date();
  dt.setFullYear(2019);
  dt.setMonth(3);
  dt.setDate(1);
  dt.setHours(11);
  dt.setMinutes(59);
  dt.setSeconds(59);
  var now = new Date();
  var difference = dt.getTime() - now.getTime();
  //sss
  if (difference <= 0) {

    // Timer done
    clearInterval(timer);

  } else {

    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days).append("<span>დღე</span>");
    $("#hours").text(hours).append("<span>საათი</span>");
    $("#minutes").text(minutes).append("<span>წუთი</span>");
    $("#seconds").text(seconds).append("<span>წამი</span>");
  }
}
