import ideas from "/assets/images/ideas-logo.png";
import { PiMapPinAreaLight } from "react-icons/pi";
import { PiBookOpenLight } from "react-icons/pi";
import { PiTruckThin } from "react-icons/pi";
import { PiMoneyWavyLight } from "react-icons/pi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
// import { MdArrowRight } from "react-icons/md";

const navLinks = [
  { path: "/end-of-season-sale", label: "End Of Season Sale" },
  { path: "/limited-edition", label: "Limited Edition" },
  { path: "/lawn-2024", label: "Lawn 2024" },
  { path: "/unstitched", label: "Unstitched" },
  { path: "/ideas-home", label: "Ideas Home" },
  { path: "/women", label: "Women" },
  { path: "/salt", label: "Salt" },
  { path: "/men", label: "Men" },
  { path: "/jewelry", label: "Jewelry" }, // Fixed spelling
  { path: "/shoes", label: "Shoes" },
  { path: "/bags", label: "Bags" },
  { path: "/kids", label: "Kids" },
  { path: "/fragrances", label: "Fragrances" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".item2");
      if (window.scrollY > 90) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-[#000]">
        <div className="item1 container">
          <div className="t1 flex justify-between items-center text-white ">
            <div className="flex items-center gap-3">
              <div className="inline-flex gap-4 md:hidden">
                {!isOpen ? (
                  <button onClick={() => setIsOpen(true)}>
                    <RxHamburgerMenu size={30} />
                  </button>
                ) : (
                  <button onClick={() => setIsOpen(false)}>
                    <RxCross2 size={30} />
                  </button>
                )}
              </div>

              <img src={ideas} alt="Logo" />
            </div>
            <div className="hidden md:!flex">
              <span className="text-white pl-4">
                <PiMapPinAreaLight size={30} />
              </span>
              <p className="hidden lg:!inline-flex">Store</p>
            </div>
            <div className="hidden md:!flex gap-3 items-center text-sm pl-8 font-light">
              <div className="inline-flex md:flex-col lg:flex-row items-center">
                <span className="">
                  <PiMoneyWavyLight size={30} />
                </span>
                <p className="pl-1">Ideas Rewards</p>
              </div>
              <div className="inline-flex md:flex-col lg:flex-row items-center">
                <span className="">
                  <LiaExchangeAltSolid size={25} />
                </span>
                <p className="pl-1">Return & Exchanges</p>
              </div>
              <div className="inline-flex md:flex-col lg:flex-row items-center">
                <span className="">
                  <PiTruckThin size={30} />
                </span>
                <p className="pl-1">Track Order</p>
              </div>
              <div className="inline-flex md:flex-col lg:flex-row items-center">
                <span className="">
                  <PiBookOpenLight size={25} />
                </span>
                <p className="pl-1">LookBook</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="hidden md:!inline-block">
                <span className="">
                  <CiSearch size={30} />
                </span>
              </div>
              <div className="hidden md:!inline-block">
                <span className="">
                  <GoPersonAdd size={30} />
                </span>
              </div>
              <div>
                <span className="">
                  <TfiShoppingCart size={30} />
                </span>
              </div>
              <p>| PKR</p>
            </div>
          </div>
        </div>
        <div className="item2 container top-0  bg-black z-10">
          <div className="text-white hidden md:!flex flex-wrap gap-6 -mt-1">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={
                  item.label === "End Of Season Sale" ||
                  item.label === "Limited Edition"
                    ? "font-medium"
                    : ""
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="w-full px-4 flex items-center md:hidden bg-white p-2  border-none rounded-full ">
            <span className="text-[#282828]">
              <IoSearch />
            </span>
            <input
              type="text"
              className="w-full p-2  border-none rounded-full focus:outline-none"
              placeholder="SEARCH:"
            />
          </div>
        </div>
      </div>
      <Canvas isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-1">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={
                item.label === "End Of Season Sale" ||
                item.label === "Limited Edition"
                  ? "font-medium mobileMenu"
                  : "bg-[#FAFAFA] mobileMenu"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </Canvas>
    </>
  );
};

export default Header;
