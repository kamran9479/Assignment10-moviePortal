
import * as React from 'react';
import Rating from '@mui/material/Rating';

const AddMovies = () => {
    const [rating, setRating] = React.useState();


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        console.log(form)
        const img = form.poster.value
        const title = form.title.value
        const genre = form.genre.value
        const duration = form.duration.value
        const year = form.year.value
        const summary = form.summary.value
        const data = {
            img: img,
            title: title,
            genre: genre,
            duration: duration,
            year: year,
            rating : rating,
            summary: summary
        }
        console.log(data)


    }
    return (
        <div className="max-w-lg my-10 mx-auto p-6 bg-stone-400 text-black shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Add a Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Movie Poster URL</label>
                    <input
                        type="url"
                        name="poster"

                        className="w-full p-2 border rounded"
                        placeholder="Enter image URL"
                    />
                    {/* {errors.poster && <p className="text-red-500 text-sm">{errors.poster}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Movie Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-2 border rounded"
                        placeholder="Enter movie title"
                    />
                    {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Genre</label>
                    <select name="genre" className="w-full p-2 border rounded">
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

                        className="w-full p-2 border rounded"
                        placeholder="Enter duration"
                    />
                    {/* {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>} */}
                </div>

                <div>
                    <label className="block font-medium">Release Year</label>
                    <select name="year" className="w-full p-2 border rounded" >
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
                        value={rating}
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