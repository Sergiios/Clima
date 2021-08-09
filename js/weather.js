const form = document.querySelector('form')

const APIkey = 'xScN5mQvtdZJf9JmWIMOj8ALlnokfNNr'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
    `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`

const getWeatherUrl = cityKey =>
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}&language=pt-br`


const fetchData = async url => {
    try{
        const response = await fetch(url)
    
        if(!response.ok)
            throw new Error('Não foi possivel obter os dados')
            
        return await response.json()

    } catch ({name, message}) {
        alert(`${name}:${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))


// getCityWeather('Ipatinga')
//     .then(console.log)
