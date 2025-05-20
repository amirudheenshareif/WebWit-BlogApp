import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {

    const navigate = useNavigate();
    const navData = [{
      name: 'Home',
      link: '/#headLine',
  },
  {
      name: 'About',
      link: '/#about',
  },
  {
      name: 'Blogs',
      link: '/#blog',
  },
  {
      name: 'Subscribe',
      link: '/#subscribe',
  }]


  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navData.map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          className="p-1 font-medium text-gray-800" 
        >
          <a
            href={`${item.link}`}
            onClick={() => {
              navigate(item.link);
            }}
            className="flex p-2 rounded-md items-center hover:text-blue-500 hover:bg-[#F4F1ED] transition-colors"
          >
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 font-bold text-indigo-600 cursor-pointer py-1.5 " 
        >
          Web<span className="text-indigo-300">Wit</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
            variant="text"
            className="ml-auto p-2 text-gray-900 rounded lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
