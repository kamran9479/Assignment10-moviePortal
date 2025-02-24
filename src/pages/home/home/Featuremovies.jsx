import { Link, useLoaderData } from "react-router-dom";
import MovieCaard from "../../../components/MovieCaard";
import Heading from "../../../components/Heading";

const Featuremovies = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="w-11/12 mx-auto py-10">
            <Heading title={"Best Movies Here"} para={'Enjoy all the best movies. there are all the best ratings movies and also latest.watch all movies without and buffering or loading.'}></Heading>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.slice(0,3).map(movie => <MovieCaard key={movie.id} movie={movie}></MovieCaard>)
                }
            </div>
            <button className="btn bg-slate-200 block mx-auto mt-10"><Link to="/allmovies">See all movies</Link></button>

        </div>
    );
};

export default Featuremovies;