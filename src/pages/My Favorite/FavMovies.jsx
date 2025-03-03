import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import MovieCaard from "../../components/MovieCaard";

const FavMovies = () => {
    const data = useLoaderData()
    return (
        <div className="w-11/12 mx-auto my-4 lg:my-10">
            <Heading title={'Favourite Movies'} para={'All favourite movies added here, we know that favourite means all the best movies here'}></Heading>
            {
                data.length ? <div className="grid space-y-5 lg:grid-cols-3 gap-5">
                    {
                        data.map(movie => <MovieCaard movie={movie} remove={'Remove'} key={movie._id}></MovieCaard>)
                    }
                </div> : <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>
            }

        </div>
    );
};

export default FavMovies;