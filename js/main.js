var div=document.createElement("div");
var div1=document.createElement("div");

div.setAttribute("class","time-content");
div1.setAttribute("class","time-content1");

var htmlType=document.getElementById("type");
var htmlType1=document.getElementById("type1");
htmlType.appendChild(div);
htmlType1.appendChild(div1);

setTimeout(function(){
	let date= new Date();
	var dateDiv=document.createElement("div");
	var monthDiv=document.createElement("div");
	var yearDiv=document.createElement("div");
	var hrDiv=document.createElement("div");
	var minDiv=document.createElement("div");
	var secDiv=document.createElement("div");
	var nowDate= date.getDate();
	var month= date.getMonth()+1;
	var year= date.getFullYear()%100;
	var hr= date.getHours();
	var min= date.getMinutes();
	var sec= date.getSeconds();
	var timeSession=0;
	hrDiv.innerHTML=hr;
	minDiv.innerHTML=min;
	secDiv.innerHTML=sec;
	div1.append(hrDiv,minDiv,secDiv);
	dateDiv.innerHTML=nowDate;
	monthDiv.innerHTML=month;
	yearDiv.innerHTML=year;
	div.append(dateDiv,monthDiv,yearDiv);
	if(nowDate<10){
		nowDate="0"+nowDate;
	}
	if(month<10){
		month="0"+month;
	}
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
	var day=date.getDay();
	var mark1=document.getElementsByClassName("words")[day];
	mark1.setAttribute("checked",true);
	var mark2=document.getElementsByClassName("session")[timeSession];
	mark2.setAttribute("checked",true);
	hrDiv.style.fontSize="70px";
	minDiv.style.fontSize="70px";
	secDiv.style.fontSize="70px";
	hrDiv.setAttribute("class","space");
	minDiv.setAttribute("class","space");
	secDiv.setAttribute("class","space");
	dateDiv.style.fontSize="70px";
	monthDiv.style.fontSize="70px";
	yearDiv.style.fontSize="70px";
	dateDiv.setAttribute("class","space");
	monthDiv.setAttribute("class","space");
	yearDiv.setAttribute("class","space");
},1000);