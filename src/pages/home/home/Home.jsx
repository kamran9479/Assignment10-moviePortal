import { useContext } from "react";
import { authContext } from "../../../authProvider/AuthProvider";
import Banner from "./Banner";
import Featuremovies from "./Featuremovies";
import Heading from "../../../components/Heading";


const Home = () => {
    const info = useContext(authContext)
    console.log(info)
    return (
        <div>
            <Heading para={"Many movies coming in this year, our team working hard day night for our viewers"} title={"Movie shooting"}></Heading>
            <Banner></Banner>
            <Featuremovies></Featuremovies>
        </div>
    );
};

export default Home;