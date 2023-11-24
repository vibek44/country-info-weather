import axios from 'axios'
import { useEffect, useState } from 'react'
import SearchList from './components/SearchList.jsx'
import CountryInfo from './components/CountryInfo.jsx'


const api_key=import.meta.env.VITE_SOME_KEY


const App=()=> {
  const [countries, setCountries] = useState([])
  const[weather,setWeather]=useState({})
  const [search, setSearch]=useState('')
  

  const countriesToShow=(countries.filter(country=>
      country.name.common.toLowerCase().includes(search.toLowerCase()))
    )
   
   let capital=countriesToShow.length===1 ? countriesToShow[0].capital[0]:undefined
    
  useEffect(()=>{
     console.log('country')
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(res=>{
         
          setCountries(res.data)
        })
  },[capital])

  useEffect(()=>{
    
      if(capital){
      console.log('capital')
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
     .then(res=>{
      console.log(res.data)
      setWeather(res.data)})
      }
  },[capital])

  const handleSearch=(e)=>setSearch(e.target.value)

  const handleShow=(name)=>setSearch(name)

  
    return (
      <>
        <div>find Country <input type='text' value={search} onChange={handleSearch}/></div>
        { (countriesToShow.length<10 && countriesToShow.length>1)
          ? <SearchList countries={countriesToShow} text="show" handleShow={handleShow}/>
          :((countriesToShow.length ===1 && Object.keys(weather).length>0 )
             ? <CountryInfo country={countriesToShow} weather={weather} />
             :<p>too many matches,please specify.</p>)
        }
      </>
  )
}

export default App
