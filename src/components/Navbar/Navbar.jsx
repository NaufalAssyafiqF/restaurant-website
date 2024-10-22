import Profile from "../../assets/profile.png"
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div className="text-lg font-semibold">
          <p>
            Food <span className="text-red-500">EAT</span>
          </p>
        </div>
        {/* menu section */}
        <div className="flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-4 border-primary uppercase hover:ease-in-out duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:border-b-4 border-primary uppercase hover:ease-in-out duration-200 cursor-pointer">
              Menu
            </li>
            <li className="hover:border-b-4 border-primary uppercase hover:ease-in-out duration-200 cursor-pointer">
              About
            </li>
          </ul>
          {/* login section */}
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar