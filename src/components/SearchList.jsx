const SearchList=({countries,text,handleShow})=><ul>
{
  countries.map(country=>
    <li key={country.name.common}>
      {country.name.common}
      <button type="button" onClick={(()=>handleShow(country.name.common))}>
      {text}
      </button>
    </li>
    )}

</ul>


export default SearchList