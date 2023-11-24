const CountryInfo=({country,weather})=>{
  console.log(weather.weather[0].icon+'.png')
return<>
<h2>{country[0].name.common}</h2>
<p>Capital: {country[0].capital[0]}</p>
<p>Population: {country[0].population}</p>
<h4>--Languages--</h4>
{ Object.values(country[0].languages).map(value=><li key={value}>{value}</li>)}
<img src={country[0].flags.png} alt="flag"/>
<h3>weather in {weather.name}</h3>
<p>temperature {weather.main.temp}°c</p>
<img   src= {`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
  alt='con image'/>
<p>wind:{weather.wind.speed}</p>
</>
}
export default CountryInfo