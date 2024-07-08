import { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    viewBox="0 0 18 14"
    fill="none"
    className="cursor-pointer md:hidden inline-block"
    {...props}
  >
    <path
      d="M1.5 6.99998H16.5M1.5 12.77H16.5M1.5 1.22998H16.5"
      stroke="#C80001"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
);

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="p-5 bg-blur m-0 py-5">
      <header
        className={`flex justify-between md:justify-center items-center align-center w-full gap-5`}
      >
        <div className="flex mx-5">
          <Link to="/" className="flex space-evenly align-center">
            <h2 className="font-bold text-primary text-2xl text-nowrap">
              Body Shop
            </h2>
          </Link>
        </div>

        <nav className="hidden md:block mx-4 text-gray-800">
          <ul className="flex justify-between gap-4">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Wears</a>
            </li>
            <li className="">
              <a href="#" className="text-primary">
                Shoes
              </a>
            </li>
            <li className="">
              <a href="#">Bags</a>
            </li>
            <li className="">
              <a href="#" className="">
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center mx">
          <div className="hidden md:block relative w-full">
            <input
              type="text"
              id="text-search"
              className="bg-transparent border border-primary text-gray-900 text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pe-10 p-2.5 placeholder:text-primary"
              placeholder="Search Any Cos"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 me-2 text-primary font-bold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex">
            <Link to={"/cart"}>
              <div className="inline-flex gap-2 items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16 16.5C16.5304 16.5 17.0391 16.7107 17.4142 17.0858C17.7893 17.4609 18 17.9696 18 18.5C18 19.0304 17.7893 19.5391 17.4142 19.9142C17.0391 20.2893 16.5304 20.5 16 20.5C15.4696 20.5 14.9609 20.2893 14.5858 19.9142C14.2107 19.5391 14 19.0304 14 18.5C14 17.39 14.89 16.5 16 16.5ZM0 0.5H3.27L4.21 2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20 3.67 19.95 3.84 19.88 4L16.3 10.47C15.96 11.08 15.3 11.5 14.55 11.5H7.1L6.2 13.13L6.17 13.25C6.17 13.3163 6.19634 13.3799 6.24322 13.4268C6.29011 13.4737 6.3537 13.5 6.42 13.5H18V15.5H6C5.46957 15.5 4.96086 15.2893 4.58579 14.9142C4.21071 14.5391 4 14.0304 4 13.5C4 13.15 4.09 12.82 4.24 12.54L5.6 10.09L2 2.5H0V0.5ZM6 16.5C6.53043 16.5 7.03914 16.7107 7.41421 17.0858C7.78929 17.4609 8 17.9696 8 18.5C8 19.0304 7.78929 19.5391 7.41421 19.9142C7.03914 20.2893 6.53043 20.5 6 20.5C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5C4 17.39 4.89 16.5 6 16.5ZM15 9.5L17.78 4.5H5.14L7.5 9.5H15Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <MenuIcon onClick={(_) => setShowMenu(!showMenu)} />
      </header>
      {showMenu && (
        <div className="flex flex-col px-4 gap-2 ">
          <nav className="block px-1 text-gray-800">
            <ul className="flex flex-col justify-between gap-2">
              <li className="">
                <a href="#">Home</a>
              </li>
              <li className="">
                <a href="#">Wears</a>
              </li>
              <li className="">
                <a href="#" className="text-primary">
                  Shoes
                </a>
              </li>
              <li className="">
                <a href="#">Bags</a>
              </li>
              <li className="">
                <a href="#" className="">
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
          <div className="block relative w-full">
            <input
              type="text"
              id="text-search"
              className="bg-transparent border border-primary text-gray-900 text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pe-10 p-2.5 placeholder:text-primary"
              placeholder="Search Any Cos"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                className="w-4 h-4 me-2 text-primary font-bold"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex ">
            <Link to={"/cart"}>
              <div className="inline-flex gap-2 items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16 16.5C16.5304 16.5 17.0391 16.7107 17.4142 17.0858C17.7893 17.4609 18 17.9696 18 18.5C18 19.0304 17.7893 19.5391 17.4142 19.9142C17.0391 20.2893 16.5304 20.5 16 20.5C15.4696 20.5 14.9609 20.2893 14.5858 19.9142C14.2107 19.5391 14 19.0304 14 18.5C14 17.39 14.89 16.5 16 16.5ZM0 0.5H3.27L4.21 2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20 3.67 19.95 3.84 19.88 4L16.3 10.47C15.96 11.08 15.3 11.5 14.55 11.5H7.1L6.2 13.13L6.17 13.25C6.17 13.3163 6.19634 13.3799 6.24322 13.4268C6.29011 13.4737 6.3537 13.5 6.42 13.5H18V15.5H6C5.46957 15.5 4.96086 15.2893 4.58579 14.9142C4.21071 14.5391 4 14.0304 4 13.5C4 13.15 4.09 12.82 4.24 12.54L5.6 10.09L2 2.5H0V0.5ZM6 16.5C6.53043 16.5 7.03914 16.7107 7.41421 17.0858C7.78929 17.4609 8 17.9696 8 18.5C8 19.0304 7.78929 19.5391 7.41421 19.9142C7.03914 20.2893 6.53043 20.5 6 20.5C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5C4 17.39 4.89 16.5 6 16.5ZM15 9.5L17.78 4.5H5.14L7.5 9.5H15Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
