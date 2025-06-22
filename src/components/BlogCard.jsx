import { Link } from "react-router-dom";
import coverImg from "../assets/404.png"
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { cover_image, id, title, published_at, description } = blog;


    return (

        <div className="flex relative">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50 p-5">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || coverImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && <div onClick={() => handleDelete(id)} className="absolute -right-0 p-3 ml-5 hover:bg-blue-500/50 bg-primary/40 rounded-full hover:scale-105 cursor-pointer -top-5"><MdDeleteForever className="text-3xl text-red-600"></MdDeleteForever></div>}
        </div>

    );
};

export default BlogCard;