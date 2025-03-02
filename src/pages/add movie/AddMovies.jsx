
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Swal from 'sweetalert2'
import { url } from './../../authProvider/AuthProvider';
const AddMovies = () => {
    const [rating, setRating] = React.useState(null);


    
    const handleSubmit = (e) => {
        e.preventDefault()


        const convertMinutesToHours = (duration) => {
            const hours = Math.floor(duration / 60);
            const remainingMinutes = duration % 60;
            return `${hours}h ${remainingMinutes}m`;
        };
        const form = e.target

        const img = form.poster.value
        const title = form.title.value
        const genre = form.genre.value
        const duration = form.duration.value
        const resultHours = convertMinutesToHours(duration)
        const year = form.year.value
        const summary = form.summary.value
        const ratings = rating+5

        const data = {
            img: img,
            title: title,
            genre: genre,
            duration: resultHours,
            year: year,
            rating: ratings,
            summary: summary
        }
        fetch(`${url}/movies`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Movie added successfully!",
                    icon: "success",
                    draggable: true
                  });
                
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
        form.reset()


    }
    return (
        <div className="max-w-lg my-10 mx-auto p-6  shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Add a Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Movie Poster URL</label>
                    <input
                        type="url"
                        name="poster"
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
                       
                        className="w-full p-2 border rounded"
                        placeholder="Enter movie title"
                    />
                    {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Genre</label>
                    <select  name="genre" className="w-full p-2 border rounded">
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Duration (minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        
                        required
                        className="w-full p-2 border rounded"
                        placeholder="Enter duration"
                    />
                    {/* {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Release Year</label>
                    <select  name="year" className="w-full p-2 border rounded" >
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
                        
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    {/* <Rating onClick={handleRating} ratingValue={formData.rating} />
                    {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Summary</label>
                    <textarea
                        name="summary"
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
    );
};

export default AddMovies;