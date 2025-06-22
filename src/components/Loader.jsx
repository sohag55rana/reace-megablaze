import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-117px)]">
            <ScaleLoader size={100}></ScaleLoader>
        </div>
    );
};

export default Loader;