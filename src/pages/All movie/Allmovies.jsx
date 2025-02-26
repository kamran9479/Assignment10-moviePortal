import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import MovieCaard from "../../components/MovieCaard";

const Allmovies = () => {
    const data = useLoaderData()
    return (
        <div className="w-11/12 min-h-lvh mx-auto p-5">
            <Heading title={"All Movies"} para={'Enjoy all the best movies. there are all the best ratings movies and also latest.watch all movies without and buffering or loading.'}></Heading>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map(movie => <MovieCaard movie={movie} key={movie.id}></MovieCaard>)
                }
            </div>
        </div>
    );
};

export default Allmovies;