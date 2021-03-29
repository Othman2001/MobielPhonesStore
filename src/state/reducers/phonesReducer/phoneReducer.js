import{ADD_PRODUCT} from '../../actions/action'
let State = {
    phones: [
        {
            id: 1,
            Brand:'Nokia',
            Mode: '6600',
            Year: '2005',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrKCmi81gRXWloxojmlHLBbfdCb_aQlq0pg&usqp=CAU',
            Sim:"Dual Sim",
            network: "4g",
            screen: 5,
            color: "black",
            Ram:2
        },
        {
            id:2,
            Brand:'Samsung',
            Mode: 'S6',
            Year: '2006',
            image:"https://www.mytrendyphone.eu/images2/Samsung-Galaxy-S6-Edge-Diagnose-17032015-1-p.jpg",
            Sim:"Dual Sim",
            network: "4g",
            screen: 3,
            color: "green",
            Ram:2
        },
        {
            id:3,
            Brand:'Apple',
            Mode: 'iPhone4',
            Year: '2006',
            image: "https://www.apple-wd.com/wp-content/uploads/2017/04/iphone-iphone4-colors.jpg",
            Sim:"Dual Sim",
            network: "4g",
            screen: 2,
            color: "silver",
            Ram:2
        },
    ]
}

const phoneReducer = (state  = State , action)=> {
    switch (action.type) {
        case ADD_PRODUCT:
            return{
                ...state,
                phones:[...state.phones , action.item]
            }
    
        default:
            return state
    }
}
export default phoneReducer