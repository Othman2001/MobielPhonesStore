let State = {
    phones: [
        {
            id: 1,
            Brand:'Nokia',
            Mode: '6600',
            Year: '2005'
        },
        {
            id:2,
            Brand:'Samsung',
            Mode: 'S6',
            Year: '2006'
        },
        {
            id:3,
            Brand:'Apple',
            Mode: 'iPhone4',
            Year: '2006'
        },
    ]
}

const phoneReducer = (state  = State , action)=> {
    switch (action.type) {
        case 'AddPhone':
            return{
                ...state,
                phones:[...state.phones , action.item]
            }
    
        default:
            return state
    }
}
export default phoneReducer