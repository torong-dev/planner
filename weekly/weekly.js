// var edittodo;

function schedule__insert() {
    var inputValue = document.getElementById('day').value;
    var num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
        num = num-1; // 1을 빼기
        // num 변수를 사용하거나 처리할 로직을 여기에 추가
        var todos = document.querySelectorAll("td");
        if (num >= 0 && num < todos.length) {
        var targetTodoChildren = todos[num]
        targetTodoChildren.insertAdjacentHTML('afterbegin',"<div id='parent' class='parent'><div id='to__do' class='to__do'>" + document.getElementById("toDo").value + "</div><div class='btn__group'><button type='button' class='btn' onclick='edit(this)'>수정</button><button type='button' class='btn' onclick='schedule__remove()'>삭제</button></div></div>");
        } else {
        alert("입력된 값이 유효한 숫자가 아닙니다.");
        }  
    }   
}

function schedule__removeAll() {
    var toDoElements = document.querySelectorAll(".parent");
    
    toDoElements.forEach(function(element) {
        element.remove();
    });
}

function schedule__remove() {
    var toDoElement = document.getElementById("to__do");
    var parentElement = toDoElement.parentNode;
    parentElement.remove();
}

function fixed__goal() {
    var goal = document.getElementById('goal')
    var goalData = goal.value;
    localStorage.setItem('goal', goalData);
    goal.readOnly = true;
}
function unFixed__goal() {
    var goal = document.getElementById('goal')
    var goalData = goal.value;
    localStorage.setItem('goal', goalData);
    localStorage.clear();
    goal.readOnly = false
}

// function edit(clickedElement) {
//     var editElement = document.getElementById("edit");
//     if (editElement.classList.contains("d__none")) {
//         editElement.classList.replace(oldClass, newClass);
//         edittodo = clickedElement;
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


