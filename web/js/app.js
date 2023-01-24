let startTime = Date.now();

function uptimeString(seconds) {
    let days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return `${days} Jours, ${hours} Heures, ${minutes} Minutes, et ${seconds} secondes`;
}

setInterval(() => {
    let uptime = (Date.now() - startTime) / 1000;
    document.getElementById("uptimetext").textContent = uptimeString(uptime);
}, 1000);
