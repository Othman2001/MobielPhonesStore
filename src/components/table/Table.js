import {useState , useMemo} from 'react'
import './table.css'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table'
// table component 
 const Tables = ({phones, renderInfo})=>{
     //moving props to state
   const [phone , setPhone] = useState(phones)
//simple function helps me to reander tabel dynmicly 
const handleRowClick = (id)=>{
    console.log(id)
renderInfo(id);
}


const renderTable = (phones,index )=>{
    return(
        <tr  key = {index} onclick = {handleRowClick(phones.id)} >  
            <td> {phones.Brand} </td>
            <td> {phones.Mode} </td>
            <td> {phones.Year} </td>
        </tr>
    )
}
// end the function to

//start component logic

//problem Number 1: we need to pass the id of every row to 
    return(
<Table  striped bordered hover size="sm"  className = "table" >
 <thead>
     {/* all table Headers */}
     <th> Brand </th>
     <th> Model </th>
     <th> Year </th>
 </thead>
 <tbody>
     {/* calling the render table function */}
  {phone.map(renderTable)}
     </tbody>
</Table>
    )
}
// mapping state from redu
const mapStateToProps = state=>{
    return{
        phones:state.phone.phones
    }
}
// exporting component
export default connect(mapStateToProps)(Tables)