//e797b9e68fa648e140dcd21ad49023dd -- api key

const API_Key = `c5a4f96757be8514650bd9d5591f8a30`;

const loadDAta = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    console.log(data)
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


document.getElementById('btn-search').addEventListener('click', function () {
    const searchBar = document.getElementById('input-feild')
    const cityTemp = searchBar.value;
    //set city
    document.getElementById('city').innerText = cityTemp
    loadDAta(cityTemp);
})

loadDAta('dhaka')