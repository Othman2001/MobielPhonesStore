import React, {useState} from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container,Row , Col, Form} from "react-bootstrap"
import Button from"../button/Button"
import {connect} from 'react-redux'
import { AddProduct} from '../../state/actions/action'
import { Link,useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
let AddForm = ({addPhone})=>{
    // handeling state
    let history = useHistory();
const [ formData, setFormData] = useState({}) 
const [Mode , setmode]  = useState("")
const [Year , setYear]  = useState("")
const [Brand , setBrand] = useState("")
const [Ram ,setRam] = useState("")
const [color ,setColor] = useState("")
const [sim , setSim] = useState("")
const [screen , setSize] = useState("")
const [network , setNetwork] = useState("")
const[image ,setImage] = useState("")
// end handeling state
// handle all events mannulay without using any library
 const hanldeMode = (e)=>{
setmode(e.target.value)
 }
 const handleYear = (e)=>{
     setYear(e.target.value)
 }
 const handleBrand = (e)=>{
     setBrand(e.target.value)
 }
 const handleRam = (e)=>{
     setRam(e.target.value)
 }
const handleColor = (e)=>{
    setColor(e.target.value)
}
const handleSize = (e)=>{
    setSize(e.target.value)
}
const handleNetwork = (e)=>{
    setNetwork(e.target.value)
}
const handleImage = (e)=>{
    setImage(e.target.value)
}
// handeSubmit
 const handleSubmit = (e)=>{
     e.preventDefault()
     addPhone({Brand , Mode , Year ,image, network ,screen,color, Ram})
     history.push("/")
 }
    return(
        <Form onSubmit = {handleSubmit}  >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" placeholder="Samsung S6"onChange = {hanldeMode} value = {Mode}   />
          <Form.Label>Manfcuter year</Form.Label>
          <Form.Control type="number" placeholder="2016"   onChange = {handleYear} value = {Year} />
          <Form.Control type="text" placeholder="color"   onChange = {handleColor} value = {color} />

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>brand</Form.Label>
          <Form.Control as="select" onChange = {handleBrand}  value = {Brand}>
            <option>Samsung</option>
            <option>Nokia</option>
            <option>Apple</option>
            <option>Sony</option>
            <option>LG</option>
      
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Memroy</Form.Label>
          <Form.Control as="select"  onChange = {handleRam}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>screnn size</Form.Label>
          <Form.Control as="select"  onChange = {handleSize}>
            <option>4</option>
            <option>6</option>
            <option>5</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Network</Form.Label>
          <Form.Control as="select"  onChange = {handleNetwork}>
            <option>4g</option>
            <option>3g</option>
          </Form.Control>
        </Form.Group>


            <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>image url</Form.Label>
          <Form.Control type="text"  onChange = {handleImage}  />

        </Form.Group>
             <Button type='submit' text = "Save"  onClick ={handleSubmit}  />
     
      </Form>
    ) 
    }

const mapDispatchToProps = (dispatch)=>{
    return{
        addPhone :(item)=>{dispatch(AddProduct(item))}
    }
}

export default connect(null , mapDispatchToProps )(AddForm)