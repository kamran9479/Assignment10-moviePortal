
const Banner = () => {
    return (
        <div className="carousel h-[450px] rounded-box">
            <div className="carousel-item relative">
                <img className="w-full blur-sm"
                    src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img className="w-full blur-sm"
                    src="https://images.pexels.com/photos/3062535/pexels-photo-3062535.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt="Burger" />
            </div>
            <div className="carousel-item">
                <img className="w-full blur-sm"
                    src="https://images.pexels.com/photos/2510430/pexels-photo-2510430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Burger" />
            </div>
            
        </div>
    );
};

export default Banner;