import {connect} from 'react-redux'
import './phoneinfo.css';
const PhoneInfo = ({id , phones})=>{
 let phone = phones?.filter(pho=>pho.id ==id);
 console.log(phone , "idea")
    return(
        <div>
         {phone.map((ph , index)=>{
             return(
                 <div key = {index}>
                     <h1> {ph.Brand} </h1>
                     <h5> {`model name:  `}  <span> {ph.Mode} </span> </h5>
                     <img className="phoneinfo-imag"  src={ph.image}/>
                     </div>
             )
         })}

        </div>
    )
}
const mapStateToProps = state=>{
    return{
        phones:state.phone.phones
    }
}
export default connect(mapStateToProps)(PhoneInfo)