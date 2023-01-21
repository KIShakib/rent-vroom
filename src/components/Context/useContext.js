import { createContext, useState } from "react";

export const UseContext = createContext();


const ContextProvider = ({ children }) => {
    const [bookings, setBookings] = useState([])



    const context = {
        bookings, setBookings
    }

    return (
        <UseContext.Provider value={context}>
            {children}
        </UseContext.Provider>
    )
}


export default ContextProvider;
