setInterval(() => {
    const date = new Date();
    const hTime = date.getHours();
    const mTime = date.getMinutes();
    const sTime = date.getSeconds();

    const hRotation = 30 * hTime + mTime / 2;
    const mRotation = 6 * mTime + sTime / 10;
    const sRotation = 6 * sTime;
    document.getElementById('hour').style.transform = `rotate(${hRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sRotation}deg)`;
}, 1000);