import {useState} from 'react'

const Search = ()=>{
    const [data , setData] = useState("");
  
    const inputEvent = (event) =>{
        const searchInput = event.target.value;
        console.log(searchInput);
        setData(searchInput)
    }

    return(
        <form className = "searchbar">
            <input type="text" placeholder = "Search AnyTHING" value={data} onChange={inputEvent}/>
            
        </form>
    )
}
export default Search;