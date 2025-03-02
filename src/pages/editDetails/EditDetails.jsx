import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Heading from '../../components/Heading';
import { url } from './../../authProvider/AuthProvider';



const EditDetails = () => {
    const movie = useLoaderData()
    const navigate = useNavigate()

    const [rating, setRating] = React.useState(movie?.rating);
    const [url, setUrl] = useState(movie?.img);
    const [title, setTitle] = useState(movie?.title);
    const [duration, setDuration] = useState(movie?.duration);
    const [year, setYear] = useState(movie?.year);
    const [genre, setGenre] = useState(movie?.genre);
    const [summary, setSummary] = useState(movie?.summary);


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            img: url,
            title: title,
            genre: genre,
            duration: duration,
            year: year,
            rating: rating,
            summary: summary
        };
        fetch(`${url}/allMovies/${movie?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Updated!",
                    icon: "success",
                    draggable: true
                });
                navigate(`/details/${movie._id}`)
            })

    };

    return (
        <div>
            <Heading title={'Update Movie'} para={"You can easily update movie information"}></Heading>
            <div className="max-w-lg my-10 mx-auto p-6  shadow-md rounded-lg">

                <h2 className="text-xl font-semibold mb-4">Update Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Movie Poster URL</label>
                        <input
                            type="url"
                            name="poster"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                            placeholder="Enter image URL"
                        />
                        {/* {errors.poster && <p className="text-red-500 text-sm">{errors.poster}</p>} */}
                    </div>

                    <div>
                        <label className="block font-medium">Movie Title</label>
                        <input
                            required
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter movie title"
                        />
                        {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                    </div>

                    <div>
                        <label className="block font-medium">Genre</label>
                        <select value={genre} onChange={(e) => setGenre(e.target.value)} name="genre" className="w-full p-2 border rounded">
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Duration (minutes)</label>
                        <input
                            type="text"
                            name="duration"
                            value={duration}
                            onChange={(e) => {
                                const res = e.target.value
                                setDuration(res)
                            }}
                            required
                            className="w-full p-2 border rounded"
                            placeholder="Enter duration"
                        />
                        {/* {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>} */}
                    </div>

                    <div>
                        <label className="block font-medium">Release Year</label>
                        <select value={year} onChange={(e) => setYear(e.target.value)} name="year" className="w-full p-2 border rounded" >
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                        {/* {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>} */}
                    </div>

                    <div>
                        <label className="block font-medium">Rating</label>
                        <Rating
                            name="simple-controlled"
                            required
                            value={rating}
                            onChange={(e) => {
                                const res = e.target.value
                                const result = parseFloat(res)
                                setRating(result + 5);
                            }}
                        />
                        {/* <Rating onClick={handleRating} ratingValue={formData.rating} />
                    {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>} */}
                    </div>

                    <div>
                        <label className="block font-medium">Summary</label>
                        <textarea
                            name="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                            placeholder="Enter a short summary"
                        />
                        {/* {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>} */}
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditDetails;