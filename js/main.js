var div=document.createElement("div");
var div1=document.createElement("div");

div.setAttribute("class","time-content");
div1.setAttribute("class","time-content1");

var dateDiv=document.getElementById("date-set");
var timeDiv=document.getElementById("time-set");

function date(){
	var date= new Date();
	var nowDate= date.getDate();
	var month= date.getMonth()+1;
	var year= date.getFullYear()%100;
	var showDate=document.getElementById("date");
	var showMonth=document.getElementById("month");
	var showYear=document.getElementById("year");
	if(nowDate<10){
		nowDate="0"+nowDate;
	}
	if(month<10){
		month="0"+month;
	}
	showDate.innerHTML= nowDate;
	showMonth.innerHTML= month;
	showYear.innerHTML= year;
	dateDiv.append(showDate,showMonth,showYear);
}
date();

function time(){
	var showHr=document.getElementById("hour");
	var showMin=document.getElementById("minite");
	var showSec=document.getElementById("seconds");
	var date= new Date();
	var hr= date.getHours();
	var min= date.getMinutes();
	var sec= date.getSeconds();
	var timeSession=0;
	if(hr==0){
		hr=12;
	} 
	if(hr>=12){
		hr=hr-12;
		timeSession=1;
	}
	if(min<10){
		min="0"+min;
	}
	if(hr<10){
		hr="0"+hr;
	}
	if(sec<10){
		sec="0"+sec;
	}
	showHr.innerHTML=hr;
	showMin.innerHTML=min;
	showSec.innerHTML=sec;
	var day=date.getDay();
	var mark1=document.getElementsByClassName("words")[day];
	mark1.setAttribute("checked",true);
	var mark2=document.getElementsByClassName("session")[timeSession];
	mark2.setAttribute("checked",true);
	timeDiv.append(showHr,showMin,showSec);
};
setInterval(time,1000);