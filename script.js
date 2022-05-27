function newTicket()
{
    //Creates new ticket and deletes old ticket data.
        localStorage.removeItem('user');
        ticketCreator();
}

function pageLoad()
{
    //Calls tiketLoader() if data exist.
        if(localStorage.getItem('user') != null) ticketLoader();
}

function dateCorrector(day,month,year,hour,minute,seconds,offset,changed)
{
    //Calculating time with offset.
    minute = minute + offset;
    
        while(minute > 60 || hour > 24 || day > 32 || month > 13)
        {
            if(minute >= 60)
            {
                hour++;
                minute = minute - 60;
            }
            if(hour >=24)
            {
                day++;
                hour = hour - 24;
            }
            if(day >=32)
            {
                month++;
                day = day - 32;
            }
            if(month >= 13)
            {
                year++;
                month = month - 12;
            }
        }
        //Adding "0" before numbers below 10
        if(changed == false)
        {
            if(month < 10)
            {
                month = "0" + month;
            }
            if(hour < 10)
            {
                hour = "0" + hour; 
            }
            if(minute < 10)
            {
                minute = "0" + minute;
            }
            if(seconds < 10)
            {
                seconds = "0" + seconds;
            }
        }
        
    //Returning calculated date.
    return [day,month,year,hour,minute,seconds];
}

function ticketCreator()
{
    //Creates new ticket if previous data don't exist.
    if(localStorage.getItem('user') == null)
    {
        //Getting date from system.
        let data = new Date();
        let day,month,year,hour,minute,seconds,controlnumber;
        day = data.getDate();
        month = data.getMonth() + 1;
        year = data.getFullYear();
        hour = data.getHours();
        minute = data.getMinutes();
        seconds = data.getSeconds();

        //Getting user input.
        controlnumber = prompt("Tworzysz nowy bilet o godzinie " + hour + ":" + minute + " Wprowadź  id");
        controlNumber.innerHTML = controlnumber;
        
        //Calling corrector function and displaying data.
        let tempDate = dateCorrector(day,month,year,hour,minute,seconds,0,false)
        let dayC = tempDate[0],monthC = tempDate[1], yearC = tempDate[2],hourC = tempDate[3],minuteC = tempDate[4], secondsC = tempDate[5];
        purchaseTime.innerHTML = dayC + "." +monthC+"."+yearC+"r. "+hourC+":"+minuteC+":"+secondsC;

        //Saving current date to local storage.
        const dateSave = { dayC,monthC,yearC,hourC,minuteC,secondsC,controlnumber}
        localStorage.setItem('user',JSON.stringify(dateSave));

        //Calculating data with corrector function and displaying data.
        tempDate = dateCorrector(day,month,year,hour,minute,seconds,45,true)
        dayC = tempDate[0],monthC = tempDate[1], yearC = tempDate[2],hourC = tempDate[3],minuteC = tempDate[4], secondsC = tempDate[5];
        expireDate.innerHTML = dayC + "." +monthC+"."+yearC+"r. "+hourC+":"+minuteC;
    }
}

function ticketLoader()
{
        //Encrypting and saving date to variables.
        let encryptedData = JSON.parse(localStorage.getItem('user'));
        day = encryptedData.dayC;
        month = encryptedData.monthC;
        year = encryptedData.yearC;
        hour = encryptedData.hourC;
        minute = encryptedData.minuteC;
        seconds = encryptedData.secondsC;
        controlnumber = encryptedData.controlnumber;
        
        //Displaying loaded date.
        controlNumber.innerHTML = controlnumber;
        purchaseTime.innerHTML = day+"."+month+"."+year+"r. "+hour+":"+minute+":"+seconds;

        //Calculating data with corrector function and displaying data.
        tempDate = dateCorrector(day,month,year,hour,minute,seconds,45,true);
        day = tempDate[0],month = tempDate[1], year = tempDate[2],hour = tempDate[3],minute = tempDate[4], seconds = tempDate[5];
        //Displaying loaded date.
        expireDate.innerHTML = day+"."+month+"."+year+"r. "+hour+":"+minute;
}