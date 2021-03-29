import {useState , useMemo} from 'react'
import './table.css'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table'
// table component 
 const Tables = ({phones, renderInfo})=>{
const [product ,setProduct] = useState(phones)
   const [searchTerm , setSearchTerm] = useState("")
   //simple function helps me to reander tabel dynmicly 
const handleRowClick = (id)=>{
    renderInfo(id);
}

const renderTable = (product,index,filter )=>{
    return(
        <tr  key = {index} onClick = {()=>handleRowClick(product.id)} >  
            <td> {product.Brand} </td>
            <td> {product.Mode} </td>
            <td> {product.Year} </td>
        </tr>
    )
}

const handleChange = (e)=>{
    e.preventDefault()
    setSearchTerm(e.target.value)
}
    return(
        <div>
<input type = "text" placeholder = "Searcher here by Brand" value = {searchTerm} className = "table-search"  onChange = {handleChange} />
<Table  striped bordered hover size="sm"  className = "table"  variant="dark">
 <thead>
     {/* all table Headers */}
     <th> Brand </th>
     <th> Model </th>
     <th> Year </th>
 </thead>
 <tbody>
     {/* calling the render table function */}
  {phones.filter((i)=>{return  i.Brand?.match(searchTerm)}).map(renderTable)}
     </tbody>
</Table>
</div>

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