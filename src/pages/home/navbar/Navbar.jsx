import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext, useState } from "react";
import { authContext } from "../../../authProvider/AuthProvider";
import { Darkmood } from "../../../Darkmood";

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext)
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        handleLogOut()
        setIsOpen(!isOpen)
    }
    return (
        <div className="bg-orange-950 w-full text-gray-200 py-4 sticky top-0 z-50">
            <nav className="w-11/12 h-24 mx-auto flex justify-around items-center">


                {/* Mobile Menu Button - Left Side */}
                <button
                    className="lg:hidden  text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Logo - Always in One Line */}
                <div className="text-center lg:text-left">
                    <div className="btn btn-ghost text-base lg:text-xl font-bold">BD Movies</div>
                </div>

                {/* Menu - Includes Login/Register/Logout only on Mobile */}
                <div
                    className={`bg-black lg:bg-transparent lg:col-span-7 lg:flex lg:items-center lg:justify-center absolute lg:static w-full left-0 top-20 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:translate-x-0 shadow-md lg:shadow-none p-5 lg:p-0`}
                >
                    <ul className="flex flex-col lg:flex-row gap-5 font-semibold text-lg">
                        <NavLink onClick={() => setIsOpen(!isOpen)} className="hover:underline" to="/">Home</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} className="hover:underline" to="/allmovies">All Movies</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} className="hover:underline" to="/addmovies">Add Movie</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} className="hover:underline" to="/favMovies">My Favorites</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} className="hover:underline" to="/upcoming">Up-Coming</NavLink>

                        {/* Login/Register/Logout - Styled for Mobile */}
                        <div className="lg:hidden mt-5 flex flex-col space-y-3 border-t pt-5">
                            {!user ? (
                                <>
                                    <Link to="/login">
                                        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary w-full">Login</button>
                                    </Link>
                                    <Link to="/register">
                                        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-outline w-full">Register</button>
                                    </Link>
                                </>
                            ) : (
                                <button className="btn btn-error w-full" onClick={logout}>
                                    Logout
                                </button>
                            )}
                        </div>
                    </ul>
                </div>

                {/* Right Side Section (Login/Register & User Info for Large Screens) */}
                <div className="flex space-x-3 justify-center items-center lg:space-x-5">
                    <div className="flex justify-center items-center">
                        <Darkmood></Darkmood>
                    </div>
                    {
                        user ? <div className="lg:hidden flex space-x-2">
                            <div className="flex flex-col justify-center items-center">
                                <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user" />
                                <h1 className="text-sm">{user?.displayName}</h1>
                            </div>
                            
                        </div> : <Link className="lg:hidden" to="/login"><button className="btn btn-primary">Login</button></Link>
                    }

                    {/* Large Screen (LG) User Section */}
                    <div className="hidden lg:flex items-center lg:space-x-5">
                        {!user ? (
                            <>
                                <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                                <Link to="/register"><button className="btn btn-outline">Register</button></Link>
                            </>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <img className="w-10 rounded-full" src={user?.photoURL} alt="user" />
                                <h1 className="text-sm">{user?.displayName}</h1>
                                <button className="btn btn-error" onClick={handleLogOut}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;