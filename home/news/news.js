"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "900b735439fd48998f4dc8e645dd1f50";
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`;

  const searchInput = document.querySelector(".news__search__input");
  const searchBtn = document.querySelector(".news__search__btn");
  const newsList = document.getElementById("news__list");

  // 검색 버튼 클릭 이벤트
  searchBtn.addEventListener("click", function () {
    searchNews();
  });

  // 엔터 키 이벤트
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchNews();
    }
  });

  function searchNews() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
      fetchNews();
    }
  }

  function fetchNews() {
    newsList.innerHTML = "";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        displayNews(data.articles);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }

  function displayNews(articles) {
    if (articles.length > 0) {
      articles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.className = "news__item";

        const title = document.createElement("h2");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        const image = document.createElement("img");
        image.src = article.urlToImage;
        image.alt = "News Image";
        image.className = "news__image";

        const link = document.createElement("a");
        link.href = article.url;
        link.textContent = "Read more";

        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(image);
        listItem.appendChild(link);

        newsList.appendChild(listItem);
      });
    } else {
      showPlaceholder();
    }
  }

  function showPlaceholder() {
    // 검색 결과가 없을 때 네모칸으로 정리된 메시지를 보여줌
    const placeholderItem = document.createElement("li");
    placeholderItem.className = "news__item-placeholder";

    const placeholderText = document.createElement("p");
    placeholderText.textContent = "검색 결과가 없습니다.";

    placeholderItem.appendChild(placeholderText);
    newsList.appendChild(placeholderItem);
  }
});
