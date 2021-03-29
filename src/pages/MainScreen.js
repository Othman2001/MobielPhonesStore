import {useState} from 'react'
// import Search from '../components/search/Search'
import Tables from '../components/table/Table'
import PhoneInfo from '../components/phoneInfo/PhoneInfo'
import {Row , Col , Container} from 'react-bootstrap'
import NavBar from '../components/nav/NavBar'
import BarChart from '../components/barchart/BarChart'
import PieChart from '../components/pie/Pie'
const MainScreen = ()=>{
const [id ,setId ] =  useState(null)



// const PieData = [
//     {name: 'Apple',percent: 30 , color: '#E7BD2C'},
//     {name: 'Sonny' , percent:60 ,   color: '#E73E2'} ,
//     { name: 'Nokia',percent: 10, color: '#E7932C'}
// ]
//this function used to recieve props form the child component to parent component
 const renderInfo = (id)=>{
    setId(id);
 }

//  this functuin used to receive props from search bar and send it to the table component

    return(
        <div>
      <NavBar/>
        <Row>
            <Col lg = {6} sm = {12} >
         {/* <Search  searchInfo = {searchInfo} /> */}
         <Tables renderInfo = {renderInfo}   />
    <PhoneInfo id = {id} />
    </Col>
    <Col lg = {6}  sm = {12} >
    <BarChart />
   <PieChart/>
    </Col>
 </Row>
         

        </div>

    )
}

export default MainScreen