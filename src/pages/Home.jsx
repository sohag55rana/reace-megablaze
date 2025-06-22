import Hero from "../components/Hero";
import wave from "../assets/wave.svg"


const Home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <Hero></Hero>
            </div>
            <img className="bottom-12 w-full absolute" src={wave} alt="" />
        </div>
    );
};

export default Home;