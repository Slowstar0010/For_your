const to_do_ele = document.getElementById('darg_to_do');

let x_to_do = 0;
let y_to_do = 0;
let dx_to_do = 0;
let dy_to_do = 0;

const to_do_MouseDownHandler = function (e) {
    x_to_do = e.clientX;
    y_to_do = e.clientY;
    document.addEventListener('mousemove', to_do_MouseMoveHandler);
    document.addEventListener('mouseup', to_do_MouseUpHandler);

  };

const to_do_MouseMoveHandler = function (e) {
    dx_to_do = e.clientX - x_to_do;
    dy_to_do = e.clientY - y_to_do;
    
    to_do_ele.style.top = `${to_do_ele.offsetTop + dy_to_do}px`;
    to_do_ele.style.left = `${to_do_ele.offsetLeft + dx_to_do}px`;

    const set_top = to_do_ele.offsetTop;
    const set_left = to_do_ele.offsetLeft;
    localStorage.setItem('to_do_top', set_top);
    localStorage.setItem('to_do_left', set_left);
    x_to_do = e.clientX;
    y_to_do = e.clientY;
};

const to_do_MouseUpHandler = function () {
    document.removeEventListener('mousemove', to_do_MouseMoveHandler);
    document.removeEventListener('mouseup', to_do_MouseUpHandler);
};

to_do_ele.addEventListener('mousedown', to_do_MouseDownHandler);
