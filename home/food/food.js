let cnt = 0;

function morning() {
    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            let rows = data['meals'];
            let img = rows[cnt]['strMealThumb'];
            let title = rows[cnt]['strMeal'];

            // 이미지와 텍스트 업데이트
            document.getElementById('Morning').src = img;
            document.getElementById('MorningTitle').innerText = title;

            // 클릭을 할 때마다 1씩 증가
            cnt = cnt + 1;
        });
}

function lunch() {
    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            let rows = data['meals'];
            let img = rows[cnt]['strMealThumb'];
            let title = rows[cnt]['strMeal'];

            // 이미지와 텍스트 업데이트
            document.getElementById('Lunch').src = img;
            document.getElementById('LunchTitle').innerText = title;

            // 클릭을 할 때마다 1씩 증가
            cnt = cnt + 1;
        });
}

function dinner() {
    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            let rows = data['meals'];
            let img = rows[cnt]['strMealThumb'];
            let title = rows[cnt]['strMeal'];

            // 이미지와 텍스트 업데이트
            document.getElementById('Dinner').src = img;
            document.getElementById('DinnerTitle').innerText = title;

            // 클릭을 할 때마다 1씩 증가
            cnt = cnt + 1;
        });
}