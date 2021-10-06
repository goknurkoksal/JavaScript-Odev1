function getUserName() {
    let userName= prompt("Adınız nedir?")

    let info=document.querySelector("#myName")
    info.innerHTML=`${info.innerHTML} ${userName}`
    
}
function displayTime() {
   
    var date=new Date();
    var second=date.getSeconds();
    var minute=date.getMinutes();
    var hour=date.getHours();

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    var days = ['Pazar','Pazartesi','Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',];
    var day=days[date.getDay()]
    var time=hour+":"+minute+":"+second+" "+day;

    document.getElementById('myClock').innerHTML=time;

    setTimeout(displayTime,1000);
}

getUserName();
displayTime();