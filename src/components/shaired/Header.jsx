import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "International",
      path: "/international",
    },
    {
      title: "Play",
      path: "/play",
    },
  ];
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <Link key={item.path} href={`${item.path}`}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={`${item.path}`}
                className="mr-10 font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
