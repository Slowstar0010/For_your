const bg_box = document.querySelector(".bg_main")
const clock = bg_box.querySelector(".clock");

function getClcok() {
    const date = new Date();
    const Housr = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Housr}:${Minutes}:${Seconds}`;
}

getClcok();
setInterval(getClcok , 1000);