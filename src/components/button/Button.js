import './button.css';
const Button = ({type , text})=>{
    return(
        <div>
            <button  className = "button" type = {type} >  {text} </button>
        </div>
    )
}
export default Button