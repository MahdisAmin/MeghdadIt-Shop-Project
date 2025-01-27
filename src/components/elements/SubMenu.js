import Link from "next/link";
function SubMenu() {
  return (
    <div className=" bg-white border border-gray-100 absolute w-full left-0 right-0 mt-[85px] shadow-sm shadow-gray-400">
      <div className="container mx-auto ">
        <ul className="flex items-center p-5 ">
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/apple"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              اپل
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/lenovo"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              لنوو
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/hp"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              اچ پی
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/dell"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              دل
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/asus"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              ایسوس
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/msi"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              ام اس آی
            </Link>
          </li>
          <li className="flex items-center px-4">
            <Link
              href="/products/laptops/microsoft"
              className="text-gray-800 text-sm hover:text-gray-950 hover:font-bold"
            >
              مایکروسافت
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
