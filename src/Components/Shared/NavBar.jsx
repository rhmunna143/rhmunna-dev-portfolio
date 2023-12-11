import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const NavMenu = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About Me",
        link: "/about"
    },
    {
        id: 3,
        name: "Projects",
        link: "/projects"
    },
    {
        id: 4,
        name: "Blog",
        link: "/blog"
    },
    {
        id: 1,
        name: "Contact",
        link: "/contact"
    },
]

const NavBar = () => {
    return (
        <nav className="navbar bg-black shadow-md">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            NavMenu.map(menu => <li key={menu.id}><NavLink to={`${menu.link}`}>{menu.name}</NavLink></li>)
                        }

                    </ul>
                </div>
                <Link className="float-right lg:float-left">
                    <img src={logo} className="w-40 h-16" alt="" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="font-medium menu menu-horizontal px-1">
                    {
                        NavMenu.map(menu => <li key={menu.id}><NavLink to={`${menu.link}`}>{menu.name}</NavLink></li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;