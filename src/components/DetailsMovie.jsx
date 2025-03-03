import React from 'react';
import Swal from 'sweetalert2';
import { RxVideo } from 'react-icons/rx';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { serverURL } from '../authProvider/AuthProvider';

const DetailsMovie = () => {
    const navigate = useNavigate();
    const movie = useLoaderData();
    const { title, img, summary, rating, genre, year, duration, _id } = movie;

    const handleFav = (id) => {
        fetch(`${serverURL}/favMovies/${id}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire("Added to favourite list!", "", "success");
                navigate('/favMovies');
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    text: "This movie already exists",
                });
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Confirm Delete?",
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${serverURL}/allmovies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "", "success");
                        navigate('/allmovies');
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 text-slate-200 p-6 mt-6 mb-6 border rounded-lg shadow-lg bg-gray-900">
            <div className='p-5 relative flex justify-center items-center'>
                <RxVideo className='size-32 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></RxVideo>
                <img src={img} alt={title} className="w-full max-h-96 object-cover rounded-xl shadow-md" />
            </div>
            <div className="p-5 space-y-5 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
                <p className="text-lg md:text-2xl text-gray-400">{genre}</p>
                <p className="text-lg md:text-2xl">{duration} | {year}</p>
                <p className="text-xl text-yellow-500 font-bold">⭐ {rating}</p>
                <p className="mt-2 text-base md:text-lg p-1 text-gray-300">{summary}</p>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <Link to={`/details/edit/${_id}`} className="w-full md:w-auto">
                        <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full md:w-auto">Edit Details</button>
                    </Link>
                    <button onClick={() => handleFav(_id)} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full md:w-auto">Add to Favorite</button>
                    <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full md:w-auto">Delete Movie</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsMovie;