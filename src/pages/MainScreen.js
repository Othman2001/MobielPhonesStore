import {useState} from 'react'
import Search from '../components/search/Search'
import Tables from '../components/table/Table'
import PhoneInfo from '../components/phoneInfo/PhoneInfo'
import {Row , Col , Container} from 'react-bootstrap'
import NavBar from '../components/nav/NavBar'
import BarChart from '../components/barchart/BarChart'
import Slice from '../components/PieChart/Pie'
import * as d3 from "d3";
import faker from "faker"
const MainScreen = ()=>{
const [id ,setId ] =  useState(null)
const data = [ 
    {year: 2002 , mobielCount:11, sales:"3666" },
    {year: 2003 , mobielCount:223, sales:"3222"},
    {year: 2005 , mobielCount:1123 , sales:"2113",  },
    {year: 2006 , mobielCount:555 , sales:"2221"},
    {year: 2007 , mobielCount:233  , sales:"1212"},

]



 const renderInfo = (id)=>{
    setId(id);
 }

    return(
        <div>
      <NavBar/>
        <Row>
            <Col lg = {6} sm = {12} >
         <Search/>
         <Tables renderInfo = {renderInfo} />
    <PhoneInfo id = {id} />
    </Col>
    <Col lg = {6}  sm = {12} >
    <BarChart data = {data}/>
    <Slice/>
    </Col>
 </Row>
         

        </div>

    )
}

export default MainScreen