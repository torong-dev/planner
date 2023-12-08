"use strict";

async function getQuotes(url = "") {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "3WlYeUK+ZoPCBN8hKra/2A==HluNwtO2ECZik6On",
      },
    });
    if (!response.ok) {
      throw new Error("네트워크 오류");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function loadRandomQuote() {
  try {
    const [{ author, quote }] = await getQuotes(
      "https://api.api-ninjas.com/v1/quotes"
    );
    const quoteElement = document.createElement("q");
    quoteElement.innerText = quote;

    // id가 'quote'인 엘리먼트를 찾아서 자식으로 추가
    const quoteParagraph = document.getElementById("quote");
    quoteParagraph.innerHTML = "";
    quoteParagraph.appendChild(quoteElement);

    // 작가 추가
    const authorElement = document.createElement("p");
    authorElement.innerHTML = `<br>- ${author} -`;
    quoteParagraph.appendChild(authorElement);
  } catch (error) {
    console.error(error);
  }
}

// 페이지 로딩 시에 자동으로 명언을 가져오도록 호출
loadRandomQuote();
