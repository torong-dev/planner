// 브라우저가 완전히 load되면 실행
document.addEventListener("DOMContentLoaded", function () {
  input1StoredData = localStorage.getItem('goal-input1__value');
  input2StoredData = localStorage.getItem('goal-input2__value');
  input3StoredData = localStorage.getItem('goal-input3__value');

  // localstorage에 저장된 데이터가 있다면 실행
  if(input1StoredData){
    let inputElement = document.getElementById('goal-input1')
    document.getElementById('goal-input1').value = input1StoredData
    inputElement.setAttribute('readonly','true')
    inputElement.classList.add("input-disabled");
  }
  if (input2StoredData){
    let inputElement = document.getElementById('goal-input2')
    document.getElementById('goal-input2').value = input2StoredData
    inputElement.setAttribute('readonly','true')
    inputElement.classList.add("input-disabled");
  }
  if (input3StoredData){
    let inputElement = document.getElementById('goal-input3')
    document.getElementById('goal-input3').value = input3StoredData
    inputElement.setAttribute('readonly','true')
    inputElement.classList.add("input-disabled");
  }
});

// 목표 추가처리 함수
function addItem(inputId) {
  let inputElement = document.getElementById(inputId);
  let inputValue = document.getElementById(inputId).value;

  if(!inputValue){
    alert('목표를 입력해주세요!');
    return;
  }
  localStorage.setItem(inputId + "__value", inputValue);

  // console.log("Data for " + inputId + " saved to LocalStorage!");
  inputElement.setAttribute('readonly','true')
  inputElement.classList.add("input-disabled");
  // document.getElementById(inputId).value = '';
}

// 목표 완료처리 함수
function doneItem(inputId) {
  let inputElement = document.getElementById(inputId);
  
  localStorage.removeItem(inputId + "__value");
  inputElement.removeAttribute('readonly','true');
  inputElement.classList.remove("input-disabled");
  document.getElementById(inputId).value = "";
}
