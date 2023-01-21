import { useQuery } from "@tanstack/react-query";
import { createStore, applyMiddleware } from "redux";
const thunk = require('redux-thunk').default;

const GET_CARS_REQUEST = "GET_CARS_REQUEST";
const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";
const GET_CARS_FAILED = "GET_CARS_FAILED";

const initialCarsState = {
    cars: [],
    isLoading: false,
    error: null
}


const getCarsRequest = () => {
    return {
        type: GET_CARS_REQUEST
    }
}
const getCarsFailed = (error) => {
    return {
        type: GET_CARS_FAILED,
        payload: error,
    }
}
const getCarsSuccess = (cars) => {
    return {
        type: GET_CARS_SUCCESS,
        payload: cars
    }
}


const carsReducer = (state = initialCarsState, action) => {
    return {
        ...state,
        cars: ['a', 'b', 'c']
    }
    // switch (action.type) {
    //     case GET_CARS_REQUEST:
    //         return {
    //             ...state,
    //             isLoading: true

    //         }
    //     case GET_CARS_SUCCESS:
    //         return {
    //             ...state,
    //             isLoading: false,
    //             cars: action.payload

    //         }
    //     case GET_CARS_FAILED:
    //         return {
    //             ...state,
    //             isLoading: false,
    //             error: action.payload

    //         }

    //     default:
    //         return state;
    // }
}


const fetchData = () => {
    return (dispatch) => {
        dispatch(getCarsRequest())
        const { data = {}, refetch } = useQuery({
            queryKey: ["/cars"],
            queryFn: () => fetch("data.json")
                .then(res => res.json())
        })
        dispatch(getCarsSuccess(data.cars))
        console.log(data.cars);
    }
}

export const store = createStore(carsReducer, applyMiddleware(thunk));
// export const store = createStore({ data: "Cars" });

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());