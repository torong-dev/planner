document.addEventListener("DOMContentLoaded", function () {
  // 달력 생성
  generateCalendar();

  // 메모 영역 관련 이벤트 처리
  const memoArea = document.getElementById("calendar__memo");
  const memoText = document.getElementById("memoText");
  const saveBtn = document.getElementById("calendar__saveBtn");
  const closeBtn = document.getElementById("calendar__closeBtn");

  saveBtn.addEventListener("click", function () {
    const selectedDate = document.querySelector("#calendar-body .selected");
    if (selectedDate) {
      const memo = memoText.value;
      selectedDate.dataset.memo = memo;
      memoArea.style.display = "none";
      memoText.value = "";
    }
  });

  closeBtn.addEventListener("click", function () {
    memoArea.style.display = "none";
    memoText.value = "";
  });

  // 외부 영역 클릭 시 메모 영역 닫기
  window.addEventListener("click", function (event) {
    if (
      !memoArea.contains(event.target) &&
      !event.target.matches("#calendar-body .selected")
    ) {
      memoArea.style.display = "none";
      memoText.value = "";
    }
  });
});

function generateCalendar() {
  const calendarBody = document.getElementById("calendar-body");
  const currentMonthElement = document.getElementById("calendar__currentMonth");
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentYear = today.getFullYear();

  // 현재 월의 첫 날
  const firstDay = new Date(currentYear, currentMonth, 1);

  // 이번 달의 마지막 날
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  let date = 1;
  let day = firstDay.getDay();

  currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;

  // 날짜가 테이블로 만들어지는 코드
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < day) {
        // 이번 달의 첫 날 이전의 빈 칸
        cell.textContent = "";
      } else if (date > lastDay) {
        // 이번 달의 마지막 날 이후의 빈 칸
        cell.textContent = "";
      } else {
        cell.textContent = date;
        cell.addEventListener("click", function () {
          showMemoArea(this);
        });

        // 오늘 날짜 표시
        if (
          date === currentDate &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear()
        ) {
          cell.classList.add("calendar__today");
        }

        // 토요일과 일요일에 색상 적용
        if (j === 6) {
          // 토요일
          cell.classList.add("calendar__saturday");
        } else if (j === 0) {
          // 일요일
          cell.classList.add("calendar__sunday");
        }

        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

function showMemoArea(cell) {
  const memoArea = document.getElementById("calendar__memo");
  const memoText = document.getElementById("memoText");

  memoArea.style.display = "block";
  memoText.value = cell.dataset.memo || "";

  // 선택한 날짜 표시
  const selectedDate = document.querySelector("#calendar-body .selected");
  if (selectedDate) {
    selectedDate.classList.remove("selected");
  }

  cell.classList.add("selected");
}
