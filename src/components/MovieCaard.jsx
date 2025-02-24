
const MovieCaard = ({ movie }) => {

    return (
        <div className="bg-zinc-800 pb-2 text-slate-300 shadow-lg rounded-lg overflow-hidden max-w-sm">
            <img src={movie.img} alt={movie.MovieTitle} className="w-full h-56 object-fill" />
            <div className="p-2 grid col-span-2">
                <h2 className="text-xl col-span-2 font-semibold">{movie.MovieTitle}</h2>
                <p className="">{movie.Genre}</p>
                <p className="text-sm ">{movie.Duration}  |  {movie.ReleaseYear}</p>
                <p className="text-sm text-yellow-500 font-bold">⭐ {movie.Rating}</p>
                <p className="mt-2 col-span-2 ">{movie.Summary}</p>
            </div>
            <div className="relative">
                <button className="btn mx-auto block border-indigo-600 hover:text-black bg-indigo-900 text-slate-300">View Details</button>
            </div>
        </div>
    );
};

export default MovieCaard;