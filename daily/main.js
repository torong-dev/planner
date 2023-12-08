// 초기화 함수
function init() {
  // 폼 제출 이벤트를 감지하고, addToDo 함수를 실행
  document.querySelector("form").addEventListener("submit", addToDo);
  // "모두 삭제" 버튼 클릭 이벤트를 감지하고, clearTodoList 함수를 실행
  document.getElementById("clear").addEventListener("click", clearTodoList);
  // 할 일 목록의 클릭 이벤트를 감지하고, deleteOrCheck 함수를 실행
  document.querySelector("ul").addEventListener("click", deleteOrCheck);
}

// 할 일 목록에서 항목을 삭제하거나 체크하는 함수
function deleteOrCheck(e) {
  // 클릭한 요소의 클래스 이름을 확인하여 동작을 결정
  if (e.target.className == "delete")
    deleteToDo(e); // X 버튼을 누르면 목록에서 항목 삭제
  else {
    checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바줌
  }
}

// 할 일 목록에서 항목을 삭제하는 함수
function deleteToDo(e) {
  // X 버튼을 누르면 목록에서 해당 항목을 삭제.
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// 체크박스를 클릭하여 스타일을 변경하는 함수
function checkToDo(e) {
  const todoLabel = e.target.nextSibling;

  if (e.target.checked) {
    // 체크박스가 선택되었을 때 스타일을 변경
    todoLabel.style.textDecoration = "line-through";
    todoLabel.style.color = "#84878a";
  } else {
    // 체크박스가 해제되었을 때 스타일을 초기화
    todoLabel.style.textDecoration = "none";
    todoLabel.style.color = "#000000";
  }
}
// 할 일 목록을 전체 삭제하는 함수
function clearTodoList(e) {
  // 할 일 목록의 내용을 모두 비워줌
  let ul = document.getElementById("daily__list");
  ul.innerHTML = ""; // ul의 innerHTML을 비워주도록 수정
}

// 새로운 할 일을 추가하는 함수
function addToDo(e) {
  e.preventDefault();
  // 입력한 할 일의 값을 가져옴
  let toDoValue = document.querySelector("input");
  // 입력값이 비어있지 않은 경우, addTask 함수를 호출하여 목록에 추가
  if (toDoValue.value !== "") addTask(toDoValue.value);
  // 입력 창을 비워줌
  toDoValue.value = "";
}

function addTask(value) {
  let toDoValue = document.getElementById("daily__new__todo").value;
  if (toDoValue !== "") {
    // 입력값이 비어있지 않은 경우, 목록에 새로운 할 일을 추가
    let ul = document.getElementById("daily__list");
    let li = document.createElement("li");
    li.innerHTML = `<span class="delete" style="color: red;"onclick="deleteToDo(event)">x</span><input type="checkbox" onclick="checkToDo(event)"><label>${toDoValue}</label>`;
    ul.appendChild(li);
    // document.querySelector(".daily__list").style.display = "block";
    document.getElementById("daily__new__todo").value = ""; // 입력 창을 비워줌
  }

  return false; // 폼 제출을 방지
}
