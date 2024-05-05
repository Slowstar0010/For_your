const calendar_ele = document.getElementById('drag_calendar');

let x_calendar = 0;
let y_calendar = 0;
let dx_calendar = 0;
let dy_calendar = 0;

const calendarMouseDownHandler = function (e) {
    x_calendar = e.clientX;
    y_calendar = e.clientY;
    document.addEventListener('mousemove', calendarMouseMoveHandler);
    document.addEventListener('mouseup', calendarMouseUpHandler);

  };

const calendarMouseMoveHandler = function (e) {
    dx_calendar = e.clientX - x_calendar;
    dy_calendar = e.clientY - y_calendar;
    
    calendar_ele.style.top = `${calendar_ele.offsetTop + dy_calendar - 16}px`;
    calendar_ele.style.left = `${calendar_ele.offsetLeft + dx_calendar}px`;

    const set_top = calendar_ele.offsetTop;
    const set_left = calendar_ele.offsetLeft;
    localStorage.setItem('calendar_top', set_top);
    localStorage.setItem('calendar_left', set_left);
    x_calendar = e.clientX;
    y_calendar = e.clientY;
};

const calendarMouseUpHandler = function () {
    document.removeEventListener('mousemove', calendarMouseMoveHandler);
    document.removeEventListener('mouseup', calendarMouseUpHandler);
    //dy_calendar = 0; // 이동이 끝나면 dy 값을 초기화
};

calendar_ele.addEventListener('mousedown', calendarMouseDownHandler);
