function newTicket()
{
    
}
function pageLoad()
{
    let encryptedData = JSON.parse(localStorage.getItem('user'));
    let minute;
    day = encryptedData.day;
    month = encryptedData.month;
    year = encryptedData.year;
    hour = encryptedData.hour;
    minute = encryptedData.minute;
    seconds = encryptedData.seconds;
    minute = minute - 45;
    if(minute >= 60)
    {
        hour++;
        minute = minute - 60;
    }
    if(minute <= 0)
    {
        hour--;
        minute = minute +60;
    }
    if(month <= 9)
    {
        expiredate.innerHTML = day + ".0" + month + "." + year + "r.";
    }
    if(month <=10)
    {
        expiredate.innerHTML = day + "." + month + "." + year + "r.";
    }
    if(minute < 10)
    {
        if(seconds >=10)
        {
             Id.innerHTML = day + "." + month + "." + year + "r." + " " + hour + ":0" + minute + ":" + seconds;
        }
        if(seconds < 10)
        {
                Id.innerHTML = day + "." + month + "." + year + "r." + " " + hour + ":0" + minute + ":0" + seconds;
        }
    }
}