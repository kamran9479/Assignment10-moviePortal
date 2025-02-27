import React from 'react';
import UpcomingHeading from '../../../components/UpcomingHeading';

const Slides = ({img}) => {
    return (
        <div className="w-full h-[450px] bg-cover relative flex justify-center items-center" style={{ backgroundImage: `url(${img})`,
        }}>
            <UpcomingHeading></UpcomingHeading>
        </div>
    );
};

export default Slides;