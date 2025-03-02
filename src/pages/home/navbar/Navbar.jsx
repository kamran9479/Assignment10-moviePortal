import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { authContext } from "../../../authProvider/AuthProvider";
import { Darkmood } from "../../../Darkmood";

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext)
    return (
        <div className="bg-orange-950 w-full text-gray-200 py-4 sticky top-0 z-50 rounded-b-xl">
            <nav className="navbar w-11/12 h-20 mx-auto grid grid-cols-12">
                <div className="col-span-2">
                    <a className="btn btn-ghost text-xl font-bold">BD-Movies</a>
                </div>
                <div className="col-span-7 justify-center">
                    <ul className="flex gap-5 font-semibold text-lg">
                        <NavLink className="hover:underline" to="/">Home</NavLink>
                        <NavLink className="hover:underline" to="/allmovies">All Movies</NavLink>
                        <NavLink className="hover:underline" to="/addmovies">Add Movie</NavLink>
                        <NavLink className="hover:underline" to="/favMovies">My Favorites</NavLink>
                        <NavLink className="hover:underline" to="/upcoming">Up-Coming</NavLink>
                    </ul>
                </div>
                <div className="col-span-3 justify-end">
                    <div className="mx-5">
                        <Darkmood></Darkmood>
                    </div>

                    {
                        user ? <div className="flex justify-center items-center space-x-5">
                            <div>
                                <img className="w-10 mx-auto rounded-full" src={user?.photoURL} alt="user" />
                                <h1 className="text-sm">{user?.displayName}</h1>
                            </div>
                            <button className="btn" onClick={handleLogOut}>logout</button>
                        </div> : <div className="flex space-x-5">
                            <Link to="/login"><button className="btn">Login</button></Link>
                            <Link to="/register"><button className="btn">Register</button></Link>
                        </div>
                    }

                </div>

            </nav>


        </div>
    );
};

export default Navbar;