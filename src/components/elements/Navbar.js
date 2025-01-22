import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="bg-white border-b border-b-gray-100">
      <div className="container mx-auto">
        <ul className="flex items-center p-5">
          <li className="px-4">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="px-4">
            <Link href="/article">مقالات</Link>
          </li>
          <li className="px-4">
            <Link href="/about">درباره ما</Link>
          </li>
          <li className="px-4">
            <Link href="/contact">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar