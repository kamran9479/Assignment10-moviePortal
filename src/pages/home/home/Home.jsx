
import Banner from "./Banner";
import Featuremovies from "./Featuremovies";
import Heading from "../../../components/Heading";


const Home = () => {
   
    return (
        <div>
           
            <Heading para={"Many movies coming in this year, our team working hard day night for our viewers"} title={"Movie shooting"}></Heading>
            <Banner></Banner>
            <Featuremovies></Featuremovies>
        </div>
    );
};

export default Home;