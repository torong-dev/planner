"use strict";

// DOM 구조 생성
const searchForm = document.querySelector(".news__search__form");
const searchInput = document.querySelector(".news__search__input");
const newsList = document.querySelector("#news__list");

// form 검색 인식하면 이벤트 실행
searchForm.addEventListener("submit", retrieve);

function retrieve(e) {
  // form submit 기본 전송기능(action) 막기
  e.preventDefault();

  let topic = searchInput.value;
  const apiKey = "900b735439fd48998f4dc8e645dd1f50";
  let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  // 검색내용 없을 때는 alert창 띄우기
  if (topic == "") {
    alert("먼저 검색어를 입력해주시죠.");
    return;
  }

  // news-list의 내용값 비우기(기존 검색된 li 모두 제거)
  newsList.innerHTML = "";

  // newsApi에서 가져온 정보로 DOM에 출력
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.articles.forEach((article) => {
        // 각 뉴스 아이템을 생성하고 리스트에 추가
        let newsItem = document.createElement("li");
        newsItem.textContent = article.title;
        newsList.appendChild(newsItem);
      });

      // 관련 뉴스 없을 때
      let totalResults = data.totalResults;
      console.log(totalResults);
      if (totalResults == 0) {
        console.log("없");
        let noResult = document.createElement("strong");
        noResult.className = "noResult";
        noResult.textContent = "아이쿠 아무런 기사가 없네요ㅠㅠ";
        newsList.appendChild(noResult);
      }
    })
    .catch((error) => {
      console.log("error");
    });

  console.log(topic);
}
