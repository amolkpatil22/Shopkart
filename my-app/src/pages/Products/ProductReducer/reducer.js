import { PRODUCT_FAILURE, PRODUCT_LOADING, FETCH_ELECTRONICS,FETCH_FURNITURES, FETCH_FOOTWEARS } from "./actionTypes"


const initialState={
    isLoading:false, 
    isError:false, 
    electronics:[], 
    footwears:[], 
    furnitures:[], 
}


export const reducer=(state=initialState, {type, payload})=>{
    switch(type){
case PRODUCT_LOADING:
    return{
        ...state, 
        isLoading:true
    }
    case FETCH_ELECTRONICS:
        return{
            ...state, 
            isLoading:false, 
            isError:false, 
            electronics:payload,
        }
        case FETCH_FOOTWEARS:
            return{
                ...state, 
                isLoading:false, 
                isError:false, 
                footwears:payload,
            }
            case FETCH_FURNITURES:
                return{
                    ...state, 
                    isLoading:false, 
                    isError:false, 
                    furnitures:payload,
                }
                case PRODUCT_FAILURE:
                    return{
                        ...state, 
                        isLoading:false, 
                        isError:true
                    }
            default:
                return state;
    }

}