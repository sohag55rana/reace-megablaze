import Markdown from "react-markdown";
import coverImg from "../assets/404.png"
import { useLoaderData } from 'react-router-dom';
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, id, tags, body_html, title, url } = blog;
    // console.log(blog);
    return (
        <div to={`/blog/${id}`} className="mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || coverImg} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map((tag) => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                }

            </div>
            <div className="space-y-2">
                <a href={url} className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                {/* <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span> */}
                <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;