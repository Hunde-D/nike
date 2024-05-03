import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <header className="px-8 py-8 sm:px-16 absolute w-full z-10">
      <nav className=" flex justify-between items-center max-container ">
        <a href="/">
          {" "}
          <img src={headerLogo} alt="logo" className="w-[129px] h-[29px] m-0" />
        </a>
        <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-relaxed  text-slate-gray text-lg"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <RxHamburgerMenu className="w-6 h-6" />
      </nav>
    </header>
  );
};

export default Nav;
