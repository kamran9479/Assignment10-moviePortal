import React from 'react';
import Swal from 'sweetalert2'
import { RxVideo } from 'react-icons/rx';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';


const DetailsMovie = () => {

    const navigate = useNavigate()
    const movie = useLoaderData()
    const { title, img, summary, rating, genre, year, duration, _id } = movie;


    const handleFav = (id) => {
        fetch(`http://localhost:4000/favMovies/${id}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire("added favourite list!", "", "success");
                navigate('/favMovies')
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    text: "This movie already exist",
                });
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Confirm Delete ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/allmovies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        Swal.fire("Deleted!", "", "success");
                        navigate('/allmovies')
                    });
            };
        });
    };

    return (
        <div className="w-10/12 mx-auto grid grid-cols-2 text-slate-200 p-5 mt-5 mb-5 border rounded-lg shadow-md">

            <div className='p-5 relative '>
                <RxVideo className='size-32 text-red-600 absolute top-48 left-60 '></RxVideo>
                <h1 className='btn bg-transparent hover:bg-transparent  size-32 rounded-3xl px-24 font-semibold absolute top-48 left-52 flex justify-center items-end text-red-500'></h1>
                <img src={img} alt={title} className="w-full object-cover rounded-2xl" />
            </div>
            <div className="p-5 space-y-7">
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p className="text-2xl">{genre}</p>
                <p className="text-2xl ">{duration}  |  {year}</p>
                <p className="text-2xl text-yellow-500 font-bold">⭐ {rating}</p>
                <p className="mt-2 text-xl  p-1 ">{summary}</p>
                <div className="flex gap-4 mt-4">
                    <button onClick={() => handleDelete(_id)} className="bg-red-500 btn border-none hover:text-red-500 text-white px-4 py-2 rounded-lg">Delete Movie</button>
                    <button onClick={() => handleFav(_id)} className="bg-blue-500 btn text-white hover:text-red-500 px-4 py-2 rounded-lg">
                        Add to Favorite
                    </button>
                    <Link to={`/details/edit/${_id}`}><button className="bg-blue-500 btn text-white hover:text-red-500 px-4 py-2 rounded-lg">
                        Edit Details
                    </button></Link>
                </div>
            </div>

        </div>
    );
};

export default DetailsMovie;