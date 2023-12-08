// var edittodo;

function schedule__insert() {
    var inputValue = document.getElementById('day').value;
    var num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
        num -= 1; // 1을 빼기
        // num 변수를 사용하거나 처리할 로직을 여기에 추가
        var todos = document.getElementsByClassName("todo");
        var targetTodoChildren = todos[num].children[num]
        targetTodoChildren.insertAdjacentHTML('afterbegin',"<div class='parent'><div id='to__do' class='to__do'>" + document.getElementById("toDo").value + "</div><div class='btn__group'><button type='button' class='btn' onclick='edit(this)'>수정</button><button type='button' class='btn' onclick='schedule__remove()'>삭제</button></div></div>");
    } 
    else {
        alert("입력된 값이 유효한 숫자가 아닙니다.");
    }
}

// function schedule__removeAll() {
//     var toDoElement = document.getElementById("to__do");
//     var parentElement = toDoElement.parentNode;
//     parentElement.remove();
// }

function schedule__remove() {
    var toDoElement = document.getElementById("to__do");
    var parentElement = toDoElement.parentNode;
    parentElement.remove();
}

// function edit(ths) {
//     var editElement = document.getElementById("edit");
//     if (editElement.classList.contains("d__none")) {
//         editElement.classList.remove("d__none");
//         edittodo = ths;
//         var editListInput = document.getElementById("edit__list");
//         var textToSet = edittodo.parentElement.parentElement.querySelector('.parent > .to__do').textContent;
//         editListInput.value = textToSet;
//     }
//     else {
//         var editElement = document.getElementById("edit");
//         editElement.classList.add("d__none");
//     }
// }

// function schedule__edit() {
//     var editListInputValue = document.getElementById("edit__list").value;
//     var toDoElement = edittodo.parentElement.parentElement.querySelector('.parent > .to__do');
//     toDoElement.textContent = editListInputValue;

//     var editElement = document.getElementById("edit");
//     editElement.classList.add("d__none");
// }


