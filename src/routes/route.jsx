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
import FavMovies from "../pages/My Favorite/FavMovies";
import EditDetails from "../pages/editDetails/EditDetails";
import { url } from "../authProvider/AuthProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${url}/allmovies`)
      },
      {
        path: "/allmovies",
        element: <Allmovies></Allmovies>,
        loader: () => fetch(`${url}/allmovies`)
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><DetailsMovie></DetailsMovie></PrivateRoute> ,
        loader: ({ params }) =>fetch(`${url}/allmovies/${params.id}`)
          
      },
      {
        path: "/addmovies",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>

      },
      {
        path:'/favMovies',
        element:<PrivateRoute><FavMovies></FavMovies></PrivateRoute>,
        loader:()=> fetch(`${url}/favmovies`)
      },
      {
        path: "/upcoming",
        element: <UpComingMovies></UpComingMovies>,
        loader:()=> fetch('movie.json')
      },
      {
        path:"/details/edit/:id",
        element:<PrivateRoute><EditDetails></EditDetails></PrivateRoute>,
        loader:async({params})=> fetch(`${url}/allmovies/${params.id}`)
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