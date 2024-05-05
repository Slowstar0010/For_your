const clock_ele = document.getElementById('drag_clock');

let x_clock = 0;
let y_clock = 0;
let dx_clock = 0;
let dy_clock = 0;

const clockMouseDownHandler = function (e) {
    x_clock = e.clientX;
    y_clock = e.clientY;
    console.log("clock_1")
    document.addEventListener('mousemove', clockMouseMoveHandler);
    console.log("clock_2")
    document.addEventListener('mouseup', clockMouseUpHandler);
    console.log("clock_3")
};

const clockMouseMoveHandler = function (e) {
    dx_clock = e.clientX - x_clock;
    dy_clock = e.clientY - y_clock;
    
    clock_ele.style.top = `${clock_ele.offsetTop + dy_clock}px`;
    clock_ele.style.left = `${clock_ele.offsetLeft + dx_clock}px`;


    const set_top = clock_ele.offsetTop;
    const set_left = clock_ele.offsetLeft;
    localStorage.setItem('clock_top', set_top);
    localStorage.setItem('clock_left', set_left);

    x_clock = e.clientX;
    y_clock = e.clientY;
};

const clockMouseUpHandler = function () {
    document.removeEventListener('mousemove', clockMouseMoveHandler);
    document.removeEventListener('mouseup', clockMouseUpHandler);
    dy_clock = 0; // 이동이 끝나면 dy 값을 초기화
};

clock_ele.addEventListener('mousedown', clockMouseDownHandler);
