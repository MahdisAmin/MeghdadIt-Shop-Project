import Link from "next/link";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import SubMenu from "./SubMenu";
function MainMenu() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <div className="hidden bg-white border-b border-b-gray-100 md:block">
      <div className="container mx-auto">
        <ul className="flex items-center p-5">
          <li
            className="flex items-center px-4"
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
          >
            <Link
              href="/products/laptops"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              لپتاپ
            </Link>
            <RxCaretDown />
            {showSubmenu && <SubMenu />}
          </li>
          <li className="flex items-center  px-4">
            <Link
              href="/products/mobiles"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              موبایل{" "}
            </Link>
            <RxCaretDown />
          </li>
          <li className="flex items-center  px-4">
            <Link
              href="/products/tablets"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              تبلت
            </Link>
            <RxCaretDown />
          </li>
          <li className="flex items-center  px-4">
            <Link
              href="/products/cameras"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              دوربین
            </Link>
            <RxCaretDown />
          </li>
          <li className="flex items-center  px-4">
            <Link
              href="/products/games"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              کنسول و بازی
            </Link>
            <RxCaretDown />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
