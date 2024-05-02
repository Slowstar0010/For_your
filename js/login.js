const login_page = document.querySelector(".login_page") // login_page html tag 가져오기
const loginform = document.querySelector("#login_form") // loginform html tag 가져오기
const loginform_input = loginform.querySelector(".login_form_input") // logunform 안에있는 class = login_form_input html tag 가져오기
const loginform_summit = loginform.querySelector(".login_form_submit") // logunform 안에있는 class = loginform_summit html tag 가져오기

const login_page__header = document.querySelector(".login_page__header") // logunform 안에있는 class = login_page__header html tag 가져오기

const welcome_box = document.querySelector(".welcome_box")
const welcome_text = welcome_box.querySelector(".welcome_text_box")
const welcome_name = welcome_box.querySelector(".welcome_name")

const HIDDEN_CLASSNAME = "hidden" // loginform 작동시 필요 없는 요소를 숨기기 위한 classname
const USERNAME_KEY = "username" // local_storaeg에 사용자명을 쉽게 저장하기 위한 변수

function onLoginSubmit(event){ // loginform submit 이벤트 발생시 작동하는 함수
    event.preventDefault(); // submit 진행시 페이지 새로고침을 막아줌
    const userName = loginform_input.value // submit시 input value를 저장함 
    localStorage.setItem (USERNAME_KEY, userName) // submit시 input value를 local_storage에 저장 
    loginform.classList.add(HIDDEN_CLASSNAME) // 필요없어진 loginform에 hidden class를 추가해 숨김 
    login_page__header.classList.add(HIDDEN_CLASSNAME) // 필요없어진 login_page_header에 hidden class를 추가해 숨김
    welcome_to_the_show(userName)
}

function welcome_to_the_show(userName){
    welcome_text.innerText = "어서오세요";
    welcome_name.innerText = `${userName}님`;
    welcome_box.classList.remove("hidden");
    login_page.classList.add("fade_out")
    setTimeout(function(){
        add_hidden()
    }, 2800);
}

function add_hidden(){
    login_page.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY) // web 접속시 local_storage를 확인해 username value가 존재하는지 확인

if (savedUsername === null) {
    loginform.classList.remove(HIDDEN_CLASSNAME);
    login_page__header.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", onLoginSubmit);
} else {
    welcome_to_the_show(savedUsername)
}
