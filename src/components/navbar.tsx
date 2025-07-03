import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-gray-900 fixed w-full top-0 shadow-2xl z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Name at the start */}
        <p className="self-center text-2xl font-semibold whitespace-nowrap text-[#DCA465] ">
          MWANGI MUTHONY
        </p>
        
        {/* Menu items centered */}
        <div className="hidden md:flex flex-grow justify-center" id="navbar-default">
          <ul className="font-medium flex md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#aboutme"
                className="block py-2 px-3 hover:underline-8 text-white hover:text-[#DCA465] rounded-sm md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="py-2 px-3  text-white hover:text-[#DCA465] rounded-sm  md:p-0 dark:text-white "
              >
               Skills
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="py-2 px-3 text-white hover:text-[#DCA465] md:p-0"
              >
                 Work
                
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-white rounded-sm text-grey-900 hover:text-[#DCA465]  md:p-0 "
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm  md:border-0  md:p-0 hover:text-[#DCA465]"
              >
                Gallery
              </a>
            </li> */}
          </ul>
        </div>
        
        {/* Button at the end */}
<a href="tel:+254713289622">
  <button className="border border-[#DCA465] bg-[#DCA465] rounded-md p-2 text-white hover:text-[#DCA465] hover:bg-gray-700">
    Let's Talk
  </button>
</a>
      </div>
    </nav>
  );
};

export default Navbar;