import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";


export default function UpcomingMovies() {
    const movies = useLoaderData()
  return (
    <div className=" w-11/12 mx-auto text-white min-h-screen">
     
      <section  style={{ backgroundImage: "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600')"}} className="relative  h-[60vh] flex items-center justify-center text-center bg-cover bg-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl">
          <h1 className="text-4xl font-bold">Upcoming Blockbusters</h1>
          <p className="text-lg mt-2">Get ready for the most anticipated movies!</p>
          <button className="btn btn-error mt-4">Watch Trailer</button>
        </div>
      </section>
      
     
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Trending Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <div className="card bg-neutral shadow-xl">
                <figure><img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" /></figure>
                <div className="card-body">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.genre}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-neutral">
        <h2 className="text-3xl font-bold mb-6">Explore by Genre</h2>
        <div className="flex gap-4 flex-wrap">
          {["Action", "Sci-Fi", "Drama", "Horror", "Comedy"].map((genre, index) => (
            <button key={index} className="btn btn-outline btn-accent">{genre}</button>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-gray-400 mt-2">Subscribe to get the latest updates on upcoming movies!</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-64 text-black" />
          <button className="btn btn-error ml-2">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
