import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="mt-50">
                    <h1 className="text-5xl font-bold">Welcome to <span
                        class="font-bold bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
                    >
                        MegaBlaze
                    </span> </h1>
                    <p className="py-6">
                        MegaBlaze is the bridge between the complex world of technology and <br /> the curious minds eager to understand it
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <Link
                            to="/blogs" class="relative inline-block px-4 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span class="relative text-black group-hover:text-white">Read Blogs</span>
                        </Link>
                        <Link
                            to="/bookmarks" class="relative inline-block px-4 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span class="relative text-black group-hover:text-white">Bookmarkss</span>
                        </Link>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;