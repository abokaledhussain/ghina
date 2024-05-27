const apiKey = '7bfaaedfce8bf015290fa77bf77aec8f';
const colors = ['pink', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray'];
let colorIndex = 0;

function fetchData() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getPrayerTimes(city);
        getWeather(city);
    }
}

function getPrayerTimes(city) {
    const prayerTimesApiUrl = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=&method=2`;

    fetch(prayerTimesApiUrl)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            document.getElementById('cityName').innerText = city;
            document.getElementById('prayerTimes').innerHTML = `
                <h3>مواقيت الصلاة</h3>
                <p>الفجر: ${timings.Fajr}</p>
                <p>الظهر: ${timings.Dhuhr}</p>
                <p>العصر: ${timings.Asr}</p>
                <p>المغرب: ${timings.Maghrib}</p>
                <p>العشاء: ${timings.Isha}</p>
            `;
        })
        .catch(error => console.error('Error fetching prayer times:', error));
}

function getWeather(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('weather').innerHTML = `
                <h3>الطقس</h3>
                <p>الحالة: ${weather}</p>
                <p>درجة الحرارة: ${temp}°C</p>
            `;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

function changeBackground() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
}
