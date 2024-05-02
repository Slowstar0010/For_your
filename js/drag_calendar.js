const ele = document.getElementById('drag_clock');

const clock_top = "clock_top";
const clock_left = "clock_left";
const set_top = 0;
const set_left = 0;



const save_clock_pis = localStorage.getItem(clock_top)

if (save_clock_pis === null) {
    ele.style.top = "0px";
    ele.style.left = "0px";
} else {
    ele.style.top = `${localStorage.getItem(clock_top)}px`;
    ele.style.left = `${localStorage.getItem(clock_left)}px`;
}

document.addEventListener('DOMContentLoaded', function () {
    // 마우스의 위치값 저장
    let x = 0;
    let y = 0;
  
    // 대상 Element 가져옴
    const ele = document.getElementById('drag_clock');
  
    // 마우스 누른 순간 이벤트
    const mouseDownHandler = function (e) {
      // 누른 마우스 위치값을 가져와 저장
        x = e.clientX;
        y = e.clientY;
  
      // 마우스 이동 및 해제 이벤트를 등록
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
  
    const mouseMoveHandler = function (e) {
      // 마우스 이동시 초기 위치와의 거리차 계산
        const dx = e.clientX - x;
        const dy = e.clientY - y;
  
      // 마우스 이동 거리 만큼 Element의 top, left 위치값에 반영
        ele.style.top = `${ele.offsetTop + dy}px`;
        ele.style.left = `${ele.offsetLeft + dx}px`;
        const set_top = ele.offsetTop + dy
        const set_left = ele.offsetLeft + dx
        localStorage.setItem(clock_top, set_top)
        localStorage.setItem(clock_left, set_left)
      // 기준 위치 값을 현재 마우스 위치로 update
        x = e.clientX;
        y = e.clientY;
    };
  
    const mouseUpHandler = function () {
      // 마우스가 해제되면 이벤트도 같이 해제
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
  
    ele.addEventListener('mousedown', mouseDownHandler);
  });