import React from "react";

function ProductsCards({ image , text , price }) {

  return (
    <div className="bg-white shadow-md hover:transition-all hover:shadow-gray-400 shadow-gray-200 rounded-xl overflow-hidden">
      <div className="h-[350px] flex justify-center items-center">
        <img src={image} alt={text} className=" object-contain" />
      </div>
      <div>
        <p className="text-sm text-gray-800 py-0 pr-[15px] pl-[20px]">
          {text}
        </p>
      </div>
      <div className="border-t border-t-gray-400 flex justify-between items-center py-[15px] px-[20px]">
        <p className="text-sm text-gray-800">{price}</p>
        <button className="bg-orange-400 rounded-xl p-1 text-sm cursor-pointer hover:bg-orange-500">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default ProductsCards;
