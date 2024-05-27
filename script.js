function getPrayerTimesAndWeather() {
    const city = document.getElementById('cityInput').value;
    const prayerApiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=&method=2&language=ar`;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bfaaedfce8bf015290fa77bf77aec8f&units=metric&lang=ar`;

    // جلب مواقيت الصلاة
    fetch(prayerApiUrl)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const tableBody = document.querySelector('#prayerTimesTable tbody');
            tableBody.innerHTML = `
                <tr><td>الفجر</td><td>${convertTo12Hour(timings.Fajr)}</td></tr>
                <tr><td>الشروق</td><td>${convertTo12Hour(timings.Sunrise)}</td></tr>
                <tr><td>الظهر</td><td>${convertTo12Hour(timings.Dhuhr)}</td></tr>
                <tr><td>العصر</td><td>${convertTo12Hour(timings.Asr)}</td></tr>
                <tr><td>المغرب</td><td>${convertTo12Hour(timings.Maghrib)}</td></tr>
                <tr><td>العشاء</td><td>${convertTo12Hour(timings.Isha)}</td></tr>
            `;
        })
        .catch(error => {
            console.error('Error fetching prayer times:', error);
            alert('حدث خطأ في جلب مواقيت الصلاة. يرجى المحاولة مرة أخرى.');
        });

    // جلب الطقس
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <p>الطقس في ${data.name}: ${data.weather[0].description}</p>
                <p>درجة الحرارة: ${data.main.temp}°C</p>
                <p>الرطوبة: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            alert('حدث خطأ في جلب الطقس. يرجى المحاولة مرة أخرى.');
        });
}

// تحويل الوقت من 24 ساعة إلى 12 ساعة
function convertTo12Hour(time) {
    const [hours, minutes] = time.split(':');
    const period = +hours >= 12 ? 'م' : 'ص';
    const adjustedHours = +hours % 12 || 12;
    return `${adjustedHours}:${minutes} ${period}`;
}
