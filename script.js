setInterval(()=>{
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >=  12 ? 'AM' : 'PM';

    hours = hours%12;
    hours = hours === 0 ? 12 : hours;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').textContent = 
        hours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
},1000)