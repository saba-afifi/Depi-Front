import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] text-[#847D7D] shadow-lg sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <ul className="flex items-center justify-center gap-6">
          <img src="/src/assets/images/Logo Option.svg" alt="logo" className=" w-28 h-auto justify-between" />
          <Link to="/">
            <li className="px-4 py-2 hover:text-[#8E1616] transition duration-300 text-lg font-semibold">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="px-4 py-2  hover:text-[#8E1616] transition duration-300 text-lg font-semibold">
              About
            </li>
          </Link>

          <Link to="/services">
            <li className="px-4 py-2  hover:text-[#8E1616] transition duration-300 text-lg font-semibold">
              Properties
            </li>
          </Link>

          <Link to="/contactus">
            <li className="px-4 py-2  hover:text-[#8E1616] transition duration-300 text-lg font-semibold">
              Contact
            </li>
          </Link>
          <li className="flex h-[35px] w-[110px] items-center justify-center rounded-md bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-base text-white transition-opacity duration-300 hover:opacity-90 mr-[36px]">Register</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

