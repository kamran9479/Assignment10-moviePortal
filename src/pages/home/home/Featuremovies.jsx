import { Link, useLoaderData } from "react-router-dom";
import MovieCaard from "../../../components/MovieCaard";
import Heading from "../../../components/Heading";

const Featuremovies = () => {
    const data = useLoaderData()


    return (
        <div className="w-11/12 mx-auto py-2 lg:py-8">
            <Heading title={"Best Movies Here"} para={'Enjoy all the best movies. there are all the best ratings movies and also latest.watch all movies without and buffering or loading.'}></Heading>
            <div>
                {
                    data.length ? <div className="grid w-full mx-auto lg:grid-cols-3 gap-5">
                        {
                            data?.slice(0, 6).map(movie => <MovieCaard key={movie._id} movie={movie}></MovieCaard>)
                        }
                    </div> : <p className="my-40 text-5xl w-full flex justify-center items-center text-red-500">No Movie Available</p>
                }

                {
                    data.length && <button className="btn bg-slate-200 block mx-auto mt-10"><Link to="/allmovies">See all movies</Link></button>

                }
            </div>
        </div>
    );
};

export default Featuremovies;