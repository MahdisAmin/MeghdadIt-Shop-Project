import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";


function Footer() {
  return (
    <div className="border-t border-t-gray-400 py-4">
      <div className="container mx-auto">
        <div className="flex  p-5 flex-wrap ">
          <div className="md:w-1/4 p-4">
            <h4 className="font-bold">نکست وان کد</h4>
            <ul>
              <li className="my-1 text-sm">مجوز و گواهینامه‌ها</li>
              <li className="my-1 text-sm">قوانین و مقررات</li>
              <li className="my-1 text-sm">حریم خصوصی</li>
              <li className="my-1 text-sm">تماس با ما</li>
              <li className="my-1 text-sm">درباره ما</li>
            </ul>
          </div>
          <div className=" md:w-1/4 p-4">
            <h4 className="font-bold">نکست وان کد</h4>
            <ul>
              <li className="my-1 text-sm">قوانین و مقررات</li>
              <li className="my-1 text-sm">حریم خصوصی</li>
              <li className="my-1 text-sm">مجوز و گواهینامه‌ها</li>
              <li className="my-1 text-sm">تماس با ما</li>
              <li className="my-1 text-sm">درباره ما</li>
            </ul>
          </div>
          <div className=" md:w-1/4 p-4">
            <h4 className="font-bold">خدمات</h4>
            <ul>
              <li className="my-1 text-sm">مشاوره رایگان</li>
              <li className="my-1 text-sm">پشتیبانی</li>
              <li className="my-1 text-sm">تبلیغات</li>
              <li className="my-1 text-sm">خرید سازمانی</li>
              <li className="my-1 text-sm">اعتبار سنجی خریداران</li>
              <li className="my-1 text-sm">اسمبل آنلاین</li>
            </ul>
          </div>
          <div className=" py-4 border-t w-full border-t-gray-400 md:w-1/4  md:border-none">
            <h4 className="font-bold">با ما در ارتباط باشید</h4>
            <ul className="flex items-center py-2 gap-2">
              <li>
                <FaInstagram size="30px" />
              </li>
              <li>
                <FaXTwitter size="30px" />
              </li>
              <li>
                <FaTelegram size="30px" />
              </li>
              <li>
                <FaFacebook size="30px" />
              </li>
              <li>
                <FaLinkedin size="30px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
