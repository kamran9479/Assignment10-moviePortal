

import Featuremovies from "./Featuremovies";
import Banners from "./Banners";
import ExploreByGenre from "./ExploreByGenre";


const Home = () => {

    return (
        <div>
            <Banners></Banners>
            <Featuremovies></Featuremovies>
            <ExploreByGenre></ExploreByGenre>
        </div>
    );
};

export default Home;