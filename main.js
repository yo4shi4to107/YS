var timeSc = document.getElementById("time");

var now = new Date();
var Year = now.getFullYear();
var Month = now.getMonth()+1;
var Date = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();

timeSc.innerHTML ="生きています。(" + Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + "現在)";
