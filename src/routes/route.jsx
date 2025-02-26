import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Allmovies from "../pages/All movie/Allmovies";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddMovies from "../pages/add movie/AddMovies";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpComingMovies from "../pages/upcoming-movies/UpComingMovies";
import ErrorPage from "../pages/Error/Error";
import DetailsMovie from "../components/DetailsMovie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/allmovies')
      },
      {
        path: "/allmovies",
        element: <Allmovies></Allmovies>,
        loader: () => fetch('http://localhost:4000/allmovies')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><DetailsMovie></DetailsMovie></PrivateRoute> ,
        loader: ({ params }) =>fetch(`http://localhost:4000/allmovies/${params.id}`)
          
      },
      {
        path: "addmovies",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>

      },
      {
        path: "upcoming",
        element: <UpComingMovies></UpComingMovies>
      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);
export default router;