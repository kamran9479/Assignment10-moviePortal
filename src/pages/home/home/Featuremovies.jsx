import { Link, useLoaderData } from "react-router-dom";
import MovieCaard from "../../../components/MovieCaard";
import Heading from "../../../components/Heading";

const Featuremovies = () => {
    const data = useLoaderData()
    
    return (
        <div className="w-11/12 mx-auto py-10">
            <Heading title={"Best Movies Here"} para={'Enjoy all the best movies. there are all the best ratings movies and also latest.watch all movies without and buffering or loading.'}></Heading>
            <div className="grid grid-cols-3 gap-5">
                {
                    data?.slice(0,3).map(movie => movie? <MovieCaard key={movie._id} movie={movie}></MovieCaard> : <p className="min-h-lvh text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>)
                }
            </div>
            <button className="btn bg-slate-200 block mx-auto mt-10"><Link to="/allmovies">See all movies</Link></button>

        </div>
    );
};

export default Featuremovies;