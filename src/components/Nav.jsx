import { Link, NavLink } from "react-router-dom";


const Nav = () => {

    return (
        <div className="navbar bg-white shadow-lg px-10 ">
            <div className="flex-1">

                <Link to="/" className="btn btn-ghost text-2xl font-black gap-0 text-secondary">Mega<span className="text-primary">Blaze</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    <li className="font-bold"><Link to="/">Home</Link></li>
                    <li className="font-bold"><Link to="/blogs">Blogs</Link></li>
                    <li className="font-bold"><Link to="/bookmarks">Bookmarks</Link></li>

                    <label className="toggle text-base-content">
                        <input type="checkbox" value="synthwave" className="theme-controller" />

                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                </ul>

            </div>
        </div>
    );
};

export default Nav;