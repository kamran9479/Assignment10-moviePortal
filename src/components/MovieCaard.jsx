import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MovieCaard = ({ movie, remove }) => {

    const handleRemove = (id) => {
        fetch(`http://localhost:4000/favmovies/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire("Removed!", "", "success");
                navigate('/favMovies')
            })

    }


    return (
        <div className="bg-zinc-800 pb-2 text-slate-300 shadow-lg rounded-lg overflow-hidden max-w-sm">
            <img src={movie.img} alt={movie?.title} className="w-full h-56 object-fill" />
            <div className="p-2 grid col-span-2">
                <h2 className="text-xl col-span-2 font-semibold">{movie?.title}</h2>
                <p className="text-lg">{movie?.genre}</p>
                <p className="text-xl ">{movie?.duration}  |  {movie?.year}</p>
                <p className="text-lg text-yellow-500 font-bold">⭐ {movie?.rating}</p>
                <p className="mt-2 col-span-2 p-1 ">{movie?.summary}</p>
            </div>

            {
                remove ? <div className="relative">
                    <button onClick={() => handleRemove(movie._id)} className="btn mx-auto block bg-red-500 hover:text-black  text-slate-300">{remove}</button>
                </div> : <div className="relative">
                    <Link to={`/details/${movie?._id}`}><button className="btn mx-auto block border-indigo-600 hover:text-black bg-indigo-900 text-slate-300">View Detail</button></Link>

                </div>
            }


        </div>
    );
};

export default MovieCaard;