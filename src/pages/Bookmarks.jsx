import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyBlog from "../components/EmptyBlog";


const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, [])
    const handleDelete = id => {
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if (blogs.length < 1) {
        return <EmptyBlog message="No Bookmarks Available"></EmptyBlog>
    }
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8 px-4 sm:px-8 lg:px-12 mt-12">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;