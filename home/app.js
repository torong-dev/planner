"use strict";

function deleteUserContent() {
  var deletedContent = document.getElementById("deletedContent");
  if (deletedContent) {
    deletedContent.style.display = "none"; // 혹은 deletedContent.remove()를 사용하여 완전히 제거
  }
}
