import {useState} from 'react'
import Search from '../components/search/Search'
import Tables from '../components/table/Table'
import PhoneInfo from '../components/phoneInfo/PhoneInfo'
const MainScreen = ()=>{
const [id ,setId ] =  useState(null)

 const renderInfo = (id)=>{
     console.log(id , "id")
    setId(id);
 }
    return(
        <div>
         <Search/>
         <Tables renderInfo = {renderInfo} />
    <PhoneInfo id = {id} />
        </div>
    )
}

export default MainScreen