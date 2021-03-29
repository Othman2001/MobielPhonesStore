import { Col, Row } from 'react-bootstrap';
import {connect} from 'react-redux'
import './phoneinfo.css';
const PhoneInfo = ({id , phones})=>{
 let phone = phones?.filter(pho=>pho.id ==id);
 console.log(phone , "idea")
    return(
        <div >
         {phone.map((ph , index)=>{
             return(
                 <div key = {index}>
                     <Row className = "phone">
                   <div className = "phone-title">
                      <h2> {ph.Brand} </h2>
                      </div>
                     </Row>
                     <Row>
                         {/* create col to put image of the phone */}
                         <Col lg = {3}>
                             <div className = "phone-image"> <img src = {ph.image} className = "phoneinfo-imag rounded float-left  " /> </div>
                         </Col>

                         {/* create col to put the phone data */}
                         <Col lg = {3}>
                             <div className = "phone-data" >
                                 <p> Realesd: {ph.Year} </p>
                                 <p > network: {ph.network} </p>
                                 <p>screen Size: {ph.screen} </p>
                                 <p>color: {ph.color} </p>
                             </div>
                         </Col>
                     </Row>
           
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