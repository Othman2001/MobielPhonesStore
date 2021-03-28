import {useState} from 'react'
import "./search.css"
const Search = ()=>{
    const [data , setData] = useState("");
  
    const inputEvent = (event) =>{
        const searchInput = event.target.value;
      
        setData(searchInput)
    }

    return(
        <form className = "searchbar">
         <input type="text" value = "Search" className ="searchbar-input" />
            
        </form>
    )
}
export default Search;