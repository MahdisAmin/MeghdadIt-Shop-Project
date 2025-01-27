import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";

function OffCanvasMenu() {
  const { showMenu, setShowMenu } = useContext(AppContext);
  if (!showMenu) return null;
  const closeMenu = () => setShowMenu(false);
  return (
    <aside className="h-[100vh] w-[280px] bg-white fixed top-0 right-0 z-50 shadow-lg overflow-hidden transition-all duration-[0.5s] ease-in-out md:hidden">
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1>فروشگاه اینترنتی مقداد آی تی</h1>
        <MdOutlineClose size={"20px"} className="cursor-pointer " onClick={closeMenu} />
      </div>
      <ul>
        <li className="flex items-center justify-between p-4">
          <Link
            href="/products/laptops"
            className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
          >
            لپتاپ
          </Link>
          <RxCaretDown className="cursor-pointer" />
        </li>
        <li className="flex items-center justify-between  p-4">
          <Link
            href="/products/mobiles"
            className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
          >
            موبایل{" "}
          </Link>
          <RxCaretDown className="cursor-pointer" />
        </li>
        <li className="flex items-center justify-between p-4">
          <Link
            href="/products/tablets"
            className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
          >
            تبلت
          </Link>
          <RxCaretDown className="cursor-pointer" />
        </li>
        <li className="flex items-center justify-between  p-4">
          <Link
            href="/products/cameras"
            className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
          >
            دوربین
          </Link>
          <RxCaretDown className="cursor-pointer" />
        </li>
        <li className="flex items-center justify-between p-4">
          <Link
            href="/products/games"
            className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
          >
            کنسول و بازی
          </Link>
          <RxCaretDown className="cursor-pointer" />
        </li>
      </ul>
    </aside>
  );
}

export default OffCanvasMenu;
