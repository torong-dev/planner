//현재 한국 시간
var time = new Date()
var utc = time.getTime() + (time.getTimezoneOffset() * 60 * 1000); //현재 컴퓨터 설정 시간에 utc 한국 시간차이 -540
var krTime = 9 * 60 * 60 * 1000
var korea = new Date(utc + krTime);
// console.log(korea);
var dayText = ["일", "월", "화", "수", "목", "금", "토"]

var year = korea.getFullYear(); // 년도
var month = korea.getMonth() + 1; // 월
var date = korea.getDate(); // 일

var dayN = korea.getDay(); // 요일
var day = dayText[dayN];

var KoreaTime = `${year}.${month}.${date}.${day}`

function save() {
    document.getElementById('goal').style.textDecoration = 'none';

    // 입력란의 값을 가져옴
    var timetData = document.getElementById('timeTable').value;
    var goaltData = document.getElementById('goalTable').value;

    // 로컬 저장소에 데이터 저장
    localStorage.setItem(timetData, goaltData);

    // 저장 데이터 가져오기
    var gData = localStorage.getItem(timetData);

    // 저장 데이터 불러오기
    document.getElementById('goal').append(...gData);
}

function cancel() {
    document.getElementById('goal').style.textDecoration = 'none';
    localStorage.clear();
    document.getElementById('goal').textContent = '';
}

function finish() {
    document.getElementById('goal').style.textDecoration = 'line-through';
}


