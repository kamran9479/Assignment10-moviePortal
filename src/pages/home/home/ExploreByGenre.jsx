import React from 'react';


const ExploreByGenre = () => {
   
    return (
        <section className="w-11/12 my-10 mx-auto text-slate-300 py-20 px-6 bg-neutral">
            <h2 className="text-3xl font-bold mb-6">Explore by Genre</h2>
            <div className="flex gap-4 flex-wrap">
                {["Action", "Sci-Fi", "Drama", "Horror", "Comedy"].map((genre, index) => (
                    <button key={index} className="btn btn-outline btn-accent">{genre}</button>
                ))}
            </div>
        </section>
    );
};

export default ExploreByGenre;