import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navber = () => {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
  const handleThem = (e) => {
    if (e.target.checked) {
      setTheme("synthwave")
    } else {
      setTheme("light")
    }

  }

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink to="/"className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
            <NavLink to="/blogs"className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
            <NavLink to="/bookmarks"className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost  text-xl text-secondary">Byte<span className="text-primary">Blaze</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-3 px-1">
          <NavLink to="/"className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
          <NavLink to="/blogs" className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
          <NavLink to="/bookmarks"className={({isActive})=>isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {/**Theme */}
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleThem}
            type="checkbox"
            value={theme}
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
