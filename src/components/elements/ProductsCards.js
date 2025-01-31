import React from "react";

function ProductsCards({ image, text, price }) {
  return (
    <div className="h-[350px] flex flex-col justify-between bg-white shadow-md hover:transition-all hover:shadow-gray-400 shadow-gray-200 rounded-xl overflow-hidden">
      <div className=" h-[300px] flex justify-center items-center px-4 py-1">
        <img src={image} alt={text} className=" object-contain" />
      </div>
      <div>
        <p className="text-sm text-gray-800 py-0 pr-[15px] pl-[20px]">{text}</p>
      </div>
      <div className="border-t border-t-gray-400 flex justify-between items-center  px-[4px]">
        <button className=" bg-orange-400 rounded-xl text-sm p-1 cursor-pointer hover:bg-orange-500 ">
          افزودن به سبد خرید
        </button>
        <p className="text-sm text-gray-800 p-3">{price}</p>
      </div>
    </div>
  );
}

export default ProductsCards;
