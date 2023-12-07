function 추천(식사시간) {
    var 아침메뉴 = [];
    var 점심메뉴 = [];
    var 저녁메뉴 = [];

    var 추천메뉴;
    var 이미지ID;

    // Spoonacular API 이미지 엔드포인트 URL
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

    if (식사시간 === '아침') {
        추천메뉴 = 아침메뉴[Math.floor(Math.random() * 아침메뉴.length)];
        이미지ID = '아침이미지';
    } else if (식사시간 === '점심') {
        추천메뉴 = 점심메뉴[Math.floor(Math.random() * 점심메뉴.length)];
        이미지ID = '점심이미지';
    } else if (식사시간 === '저녁') {
        추천메뉴 = 저녁메뉴[Math.floor(Math.random() * 저녁메뉴.length)];
        이미지ID = '저녁이미지';
    }

    // 이미지를 가져오는 GET 요청 보내기
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var 이미지URL = data.meals[28].strMealThumb; // Adjust this based on the API response structure
            결과표시(추천메뉴, 이미지ID, 이미지URL);
        })
        .catch(error => console.error('이미지 가져오기 오류:', error));
}

function 결과표시(메뉴, 이미지ID, 이미지URL) {
    document.getElementById(이미지ID).src = 이미지URL;
    document.getElementById(이미지ID).alt = 메뉴;
    document.getElementById(이미지ID).style.display = 'block';
    document.getElementById(이미지ID).style.margin = 'auto';
    document.getElementById(식사시간 + '메뉴').innerHTML = '<h2>' + 식사시간 + ' 메뉴</h2>' +
        '<p>추천 메뉴: ' + 메뉴 + '</p>';
}
