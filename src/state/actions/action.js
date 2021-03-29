export const ADD_PRODUCT = 'ADD_PRODUCT'

export const AddProduct = (item)=>{
    return{
        type:ADD_PRODUCT,
        item
    }
}