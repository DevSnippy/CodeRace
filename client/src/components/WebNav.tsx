import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, IconButton} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CodeRace_50x50 from "../assets/coderace_70X70.png";

export default function WebNav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (

    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-50">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold xl:hover:bg-white xl:hover:rounded-3xl duration-300"
      >
         <a href="#" className="flex items-center text-black" >
          <Link to="/about" > about </Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold xl:hover:bg-white xl:hover:rounded-3xl duration-300 "
      >
        <a href="#" className="flex items-center " >
          <Link to="/crypto" > crypto race </Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold xl:hover:bg-white xl:hover:rounded-3xl duration-300  "
       
      >
        <a href="#" className="flex items-center text-black" >
          <Link to="/quicksort" > quickSort race </Link>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold xl:hover:bg-white xl:hover:rounded-3xl duration-300 "
      >
        <a href="#" className="flex items-center text-black">
        <Link to="/fetch" > fetch race </Link>
        </a>
      </Typography>
    </ul>
  );

  return (

    <Navbar color="light-blue" className="bg-sky-200 mx-auto max-w-screen-xl pb-1">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/"> <span > <img src={CodeRace_50x50 } className="hover:bg-white xl:hover:rounded-3xl duration-300" alt="logo" /></span> </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="z-10">
        <div className="container mx-auto">
          {navList}

        </div>
      </MobileNav>
    </Navbar>
  );
}
