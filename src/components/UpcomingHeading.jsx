import React from 'react';

const UpcomingHeading = () => {
    return (
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-red-500">
            <h1 className="text-4xl font-bold">Upcoming Movie</h1>
            <p className="text-lg mt-2">Get ready for the most anticipated movies!</p>
            <button className="btn block mx-auto btn-error mt-4">Watch Trailer</button>
        </div>
    );
};

export default UpcomingHeading;