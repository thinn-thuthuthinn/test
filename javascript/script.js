function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleDateString();
}

updateTime();
setInterval(updateTime, 1000);