import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import MovieCaard from "../../components/MovieCaard";

const Allmovies = () => {
    const data = useLoaderData()
    return (
        <div className="w-11/12 min-h-lvh mx-auto p-5">
            <Heading title={"All Movies"} para={'Enjoy all the best movies. there are all the best ratings movies and also latest.watch all movies without and buffering or loading.'}></Heading>
            {
                data.length? <div className="grid grid-cols-3 gap-5">
                {
                    data.map(movie => <MovieCaard movie={movie} key={movie.id}></MovieCaard>)
                }
            </div>: <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>
            }
        </div>
    );
};

export default Allmovies;