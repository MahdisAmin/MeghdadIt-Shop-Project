import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white border-b border-b-gray-100">
      <div className="container mx-auto">
        <ul className="flex items-center p-5">
          <li className="md:hidden">
            <Image
              src="/images/svgs/menu.svg"
              width={20}
              height={20}
              alt="menu"
              className=" cursor-pointer"
            ></Image>
          </li>
          <li className="px-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 ">
              صفحه اصلی
            </Link>
          </li>
          <li className="px-4">
            <Link href="/article" className="text-gray-800 hover:text-blue-600">
              مقالات
            </Link>
          </li>
          <li className="px-4">
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              درباره ما
            </Link>
          </li>
          <li className="px-4">
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
