const calendar_dates = document.querySelector(".calendar_dates");
const calendar_year_month = document.querySelector(".calendar_year_month");
const prevbtn = document.querySelector(".prevbtn")
const nextbtn = document.querySelector(".nextbtn")

const today = new Date();
let calendar_month = today.getMonth();
let calendar_year = today.getFullYear();

function rendercalendar(){
    const first_day_of_month = new Date(calendar_year, calendar_month, 1);
    const day_in_month = new Date(calendar_year, calendar_month + 1, 0).getDate();
    const start_day_of_week = first_day_of_month.getDay();
    calendar_year_month.textContent = `${calendar_year}-${calendar_month + 1}`

    calendar_dates.innerHTML = "";

    for (let i = 0; i < start_day_of_week; i++) {
        const empty_date = document.createElement("div");
        empty_date.classList.add("date", "empty");
        calendar_dates.appendChild(empty_date);
      }
    for (let i = 1; i <= day_in_month; i++) {
        const date_element = document.createElement("div");
        date_element.classList.add("date");
        date_element.textContent = i;
        calendar_dates.appendChild(date_element);
    }
    if (today.getMonth() == calendar_month) {
        todayDate = today.getDate();
        const currentMonthDate = document.querySelectorAll('.date');
        const emptys = Array.from(document.querySelectorAll(".empty"));
        const empty_count = emptys.length
        const number = todayDate + empty_count
        currentMonthDate[number - 1].classList.add('today');
    }  
};

rendercalendar()

prevbtn.addEventListener("click", () => {
    calendar_month--;
    if (calendar_month < 0) {
        calendar_month = 11;
        calendar_year--;
    }
    rendercalendar();
  });

nextbtn.addEventListener("click", () => {
    calendar_month++;
    if (calendar_month > 11) {
        calendar_month = 0;
        calendar_year++;
    }
    rendercalendar();
});  