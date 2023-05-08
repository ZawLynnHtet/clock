
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
    let date = new Date();
    h = date.getHours() * 30;
    m = date.getMinutes() * 6;
    s = date.getSeconds() * 6;

    hour.style.transform = `rotate(${(h) + (m/12)}deg)`;
    minute.style.transform = `rotate(${(m)}deg)`;
    second.style.transform = `rotate(${(s)}deg)`;
});

// setInterval();