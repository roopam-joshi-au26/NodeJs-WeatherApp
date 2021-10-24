let curDate = document.getElementById("date");
let weathericon = document.getElementById("weathericon");

const tempStatus = "{%tempstatus%}";

if(tempStatus == 'Sunny'){
    weathericon.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>'
}else if(tempStatus == 'Clouds'){
    weathericon.innerHTML = '<i class="fas fa-clouds" style="color: #dfe4ea;"></i>'
}else if(tempStatus == 'Rainy'){
    weathericon.innerHTML = '<i class="fad fa-cloud-rain" style="color: #a4b0be;"></i>'
}else{
    weathericon.innerHTML = '<i class="fas fa-clouds" style="color: #dfe4ea;"></i>'
}

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
};

const getCurrentTime = ()=>{
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    let hours= now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";
    if (hours >11){
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if(mins <10){
        mins = "0" + mins;
    }
    return`${month} ${date} | ${hours}:${mins} ${periods}`;
};

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

