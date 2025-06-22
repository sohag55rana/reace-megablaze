import { Link } from "react-router-dom";


const EmptyBlog = ({ message }) => {
    return (
        <div className="text-3xl flex items-center  justify-center flex-col gap-5 min-h-[calc(100vh-117px)]">
            <p>{message}</p>
            <Link
                to="/blogs" class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white text-2xl">Browse Blogs</span>
            </Link>
        </div>
    );
};

export default EmptyBlog;