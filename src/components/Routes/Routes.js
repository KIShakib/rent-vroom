import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CarDetails from "../Pages/CarDetails/CarDetails";
import CurrentBookings from "../Pages/CurrentBookings/CurrentBookings";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/car-details/:vehicleNumber",
                element: <CarDetails />
            },
            {
                path: "/current-bookings",
                element: <CurrentBookings />
            }
        ]
    }
])