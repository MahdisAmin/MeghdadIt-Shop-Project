import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="bg-white my-8 mx-4 p-4 rounded-xl">
        <h3>پیگیری سفارش، انتقاد و پیشنهاد</h3>
        <p className="text-sm text-gray-600">
          برای پیگیری یا سؤال درباره سفارش و ارسال پیام بهتر است از فرم زیر
          استفاده کنید.
        </p>
        <form className="my-5 flex flex-wrap">
          <div className="flex flex-col w-full my-3 md:w-1/2 py-0 px-4">
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-400 p-2 rounded-xl outline-none"
            />
          </div>
          <div className="flex flex-col w-full my-3 md:w-1/2  py-0 px-4">
            <label htmlFor="phone">شماره تماس</label>
            <input
              type="text"
              id="phone"
              className="border border-gray-400 p-2 rounded-xl outline-none"
            />
          </div>
          <div className="flex flex-col w-full my-3 md:w-1/2  py-0 px-4">
            <label htmlFor="email">ایمیل</label>
            <input
              type="text"
              id="email"
              className="border border-gray-400 p-2 rounded-xl outline-none"
            />
          </div>
          <div className="flex flex-col w-full my-3 md:w-1/2  py-0 px-4">
            <label htmlFor="order">شماره سفارش</label>
            <input
              type="text"
              id="order"
              className="border border-gray-400 p-2 rounded-xl outline-none"
            />
          </div>
          <div className="flex flex-col w-full my-3 md:w-1/2  py-0 px-4">
            <label htmlFor="message">متن پیام</label>
            <textarea
              id="message"
              className="border border-gray-400 p-2 rounded-xl outline-none"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="flex items-center m-4">
        <FaPhoneAlt className="text-2xl text-gray-600" />
        <p className="mx-2 text-sm">
          تلفن فروش:45691000 - داخلی 2 | خدمات پس از فروش:داخلی 3 | پیگیری
          سفارشات:داخلی 1
        </p>
      </div>
      <div className="flex items-center m-4">
        <FaLocationDot className="text-2xl text-gray-600" />
        <p className="mx-2 text-sm">
          نشانی (دفتر مرکزی):تهران، خیابان مطهری، خیابان فجر، کوچه مدائن، پلاک
          ۷، ساختمان مقداد آی تی
        </p>
      </div>
      <div className="flex items-center m-4">
        <FaClock className="text-2xl text-gray-600" />
        <p className="mx-2 text-sm">
          ساعت کاری مجموعه: شنبه تا چهارشنبه (از ساعت ۹ تا ۱۸) پنجشنبه (از ساعت
          ۹ الی ۱۴)
        </p>
      </div>
    </div>
  );
}

export default Contact;
