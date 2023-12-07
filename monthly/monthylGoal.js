function addItem() {
  var inputValue = document.getElementById('inputValue').value;

  if (inputValue.trim() !== '') {
    var storedValues = JSON.parse(localStorage.getItem('myValues')) || [];
    storedValues.push(inputValue);
    localStorage.setItem('myValues', JSON.stringify(storedValues));
    displayStoredValues();
    document.getElementById('inputValue').value = '';
  } else {
    alert('Please enter a value before adding to local storage.');
  }
}

function displayStoredValues() {
  var storedValues = JSON.parse(localStorage.getItem('myValues')) || [];
  var listElement = document.getElementById('storedValues');

  listElement.innerHTML = '';

  storedValues.forEach(function(value) {
    var listItem = document.createElement('li');
    listItem.textContent = value;
    listElement.appendChild(listItem);
  });
}

displayStoredValues();
